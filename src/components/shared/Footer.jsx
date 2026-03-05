import React from 'react'

export default function Footer() {
    return (
        <div className='mt-20'>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>

                    <h1 className='text-2xl font-semibold mb-2'>
                        CS Ticket System
                    </h1>
                    <p className='max-w-96 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos harum deserunt earum nostrum est minus beatae qui! Aut vitae officiis, nemo dolorum maxime odio iste porro totam et quaerat aliquam quia quasi molestiae velit veritatis! Ut dignissimos cupiditate adipisci.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div>
                <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4 border-t border-gray-700">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by ticket system</p>
                    </aside>
                </footer>
            </div>
        </div>
    )
}
