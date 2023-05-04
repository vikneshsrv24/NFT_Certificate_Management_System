import React from 'react'
import Navbar from './Navbar'
import {
  Link
} from "react-router-dom";

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/4WZPSpgWN_nOeEe8se1lVTJjIQh5gIBXOu0G5FrpRWYxgNa8oIr4B0kjfgrxC03y-j8sTN8c8CTIQNWze98Gf1LxG6Y77HopkXXe=h600')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Marketplace = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.contentWrapper}>
            <div className={style.copyContainer}>
              <div className={style.title}>
                Chosen Ones is the world&apos;s first NFT marketplace for only certificate creation
              </div>
              <div className={style.description}></div>
              <div className={style.ctaContainer}>
                <button className={style.accentedButton}>Explore</button>
                <Link to='/'>
                  <button className={style.accentedButton}>Create</button>
                </Link>
              </div>
            </div>
            <div className={style.cardContainer}>
              <img
                className="rounded-t-lg"
                src="https://lh3.googleusercontent.com/3LKxELCZmnnxrGY7KmpuirKmvhdAfnXkjELZg4jDZASwv0KzT-9NgNW5e0mMV_F-VOBbGNeoJvGT8iebDzILwdFO5Ocs0Tcr2dCy=w600"
                alt=""
              />
              <div className={style.infoContainer}>
                <img
                  className="h-[2.25rem] rounded-full"
                  src="https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s168"
                  alt=""
                />
                <div className={style.author}>
                  <div className={style.name}>Chosen Ones</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
