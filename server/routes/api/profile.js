const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Profile model
const { Profile } = require('../../../models/profile')
// Load user model
const { User } = require('../../../models/user')
// Load validation 
const validateProfileInput = require('../../validation/profile')


// @route GET api/profile/test 
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile work"}))

// @route GET api/profile 
// @desc Get current user's profiel
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'email'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        return res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route GET api/profile/all
// @desc Get all profiles
// @access Public
router.get('/all', (req, res) => {
  const errors = {}
  Profile.find()
    .populate('user', ['name', 'email'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles'
        return res.status(404).json(errors)
      }
      res.json(profiles)
    })
    .catch(err => res.status(400).json({ profile: "🙀 There are no profiles" }))
})

// @route GET api/profile/handle:handle
// @desc Get profile by handle
// @access Public
router.get('/handle/:handle', (req, res) => {
  const errors = {}
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'email'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "😕, We couldn't find anyone with this handle"
        res.status(404).json(errors)
      }
      
      res.json(profile)
    })
    .catch(err => res.status(400).json(err))
})

// @route GET api/profile/user:user_id
// @desc Get profile by user ID
// @access Public
router.get('/user/:user_id', (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'email'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "😕, We couldn't find anyone with this handle"
        res.status(404).json(errors)
      }
      
      res.json(profile)
    })
    .catch(err => res.status(400).json({ profile: "🙀 There is no profile for this user" }))
})

// @route POST api/profile 
// @desc Create or update user profile
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body)
  // Check validation 
  if (!isValid) {
    return res.status(400).json(errors)
  }
  // Get fields
  const profileFields = {}
  profileFields.user = req.user.id
  if (req.body.handle) profileFields.handle = req.body.handle
  if (req.body.bio) profileFields.bio = req.body.bio
  if (req.body.website) profileFields.website = req.body.website
  if (req.body.replies) profileFields.replies = req.body.replies
  if (req.body.threads) profileFields.threads = req.body.threads

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (profile) {
        //  Update
        Profile.findOneAndUpdate(
          { user: req.user.id }, 
          { $set: profileFields }, 
          { new: true }
        ).then(profile => res.json(profile))
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle })
          .then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists'
              res.status(400).json(errors)
            }

            // Save profile 
            new Profile(profileFields).save().then(profile => res.json(profile))
          })
      }
    })
  
})

module.exports = router;