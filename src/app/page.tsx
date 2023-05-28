"use client"

import { useAppSelector } from '@/state/hooks'
import React from 'react'

const Home = () => {
  const { user } = useAppSelector(state => state.user);
  return (
    <div>Home</div>
  )
}

export default Home