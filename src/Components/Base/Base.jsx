import React from 'react'
import './base.scss'
import DownloadImg from "./img/Download-bro.svg"
import MemoryImg from "./img/Memory storage-bro.svg"
import AddFileImg from "./img/Add files-bro.svg"
import DigitalImg from "./img/Digital personal files-bro.svg"
import FlashlightImg from "./img/Flashlight-amico.svg"
import { Link } from 'react-router-dom'


function Base() {
    return (
        <div id="baseRoute">
                <header>
        <a href="/" id="logo">
            <img id="logo-img" src="https://img.icons8.com/plasticine/48/000000/cloud.png" alt="img here"/> 
            <span id="logo-txt">Drive</span>
        </a>

    </header>
    <main>
        <section id="sec-intro">
            <div className="sec-img">
                <img src={DownloadImg} alt="img here" />
            </div>
            <div className="sec-info">
                <h2 className="sec-heading">The Best of cloud storage</h2>
                <p className="sec-text">
                    Make your cloud storage feel like a physical hard drive with our revolutionary drive mounting
                    software.
                </p>
                <p className="sec-text">

                    Access, manage and update your cloud storage as if it were attached to your computer - But without
                    taking up any space!
                </p>
                <div id="join-btn">
                <Link to='/app'>Get Access</Link>
                </div>
            </div>


        </section>
        <section id="sec-feature">
            <div className="sec-info">
                <h2 className="sec-heading">Keep your files safe, secure and 100% private</h2>
                <p className="sec-text">
                    Sync's encrypted cloud storage platform protects your privacy by ensuring that only you can access
                    your data. Your confidential documents are completely safeguarded from unauthorized access, which is
                    the only way you can truly trust the cloud.
                </p>
            </div>
            <div className="sec-img">
                <img src={MemoryImg}  alt="img here"/>
            </div>

        </section>
        <section id="sec-intro">
            <div className="sec-img">
                <img src={AddFileImg}  alt="img here"/>

            </div>
            <div className="sec-info">
                <h2 className="sec-heading">
                    Share & Collaborate</h2>
                <p className="sec-text">
                    With our extensive range of cloud storage apps for a wide variety of platforms, you will always have
                    your Icedrive cloud storage where you need it.
                </p>
            </div>

        </section>
        <section id="sec-ease">
            <div className="sec-info">
                <h2 className="sec-heading">Better Organise </h2>
                <p className="sec-text">
                    Our platform is perfect for everyone, whether you are an avid photographer or a busy professional,
                    you will find the tools you need with drive.
                </p>
            </div>
            <div className="sec-img">
                <img src={DigitalImg}  alt="img here" />
            </div>

        </section>
        <section id="sec-rid">
            <div className="sec-img">
                <img src={FlashlightImg} alt="img here"/>
  
            </div>
            <div className="sec-info">
                <h2 className="sec-heading">
                    Get rid of faulty & slow drive</h2>
                <p className="sec-text">
                    Based On fast Storage device like SSD and better infrastructure management so that you can do your
                    job better without making your hand dirty.
                </p>
            </div>

        </section>
    </main>
    <footer>
        <a href="" id="copy">
            &copy;2021
        </a>
        <a href="" id="privacy">
            Privacy Policy
        </a>
        <a href="" id="tnc">
            Terms and Conditions
        </a>
    </footer>
        </div>
    )
}

export default Base
