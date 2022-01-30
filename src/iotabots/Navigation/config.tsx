import React from 'react'
export const PROFILE = <a href='/profile'>Profile</a>
const BOTS = <a href='/bots'>Bots</a>
const PROJECTS = <a href='/projects'>Projects</a>
const FAQ = <a href='/faq'>FAQ</a>

export const MENU = [BOTS, PROJECTS, FAQ]

export const MOBILE_MENU = [PROFILE, ...MENU]
