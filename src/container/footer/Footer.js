import { useState } from 'react';
import { ReactComponent as Facebook } from '../../accept/svg/facebook.svg';
import { ReactComponent as Instagram } from '../../accept/svg/instagram.svg';
import { ReactComponent as Tiktok } from '../../accept/svg/tiktok.svg';
import { ReactComponent as Youtube } from '../../accept/svg/youtube.svg';
import logo from '../../accept/svg/logo.svg'
import classes from './footer.module.scss'

function Footer() {
    const [email, setEmail] = useState('')

    const handelChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    return (
        <footer className={classes.component}>
            <div className={classes.footer}>
                <div className={classes.container}>
                    <p>
                        let's discuss making your interior like a dream place!
                    </p>
                    <div className={classes.contact_block}>
                        <p>
                            Contact us below to work together to build your amazing interior
                        </p>
                        <button>
                            Contact Us
                        </button>

                    </div>

                </div>
            </div>
            <div className={classes.box}>
                <div>
                    <img src={logo} alt='' className={classes.logo} />
                    <p>
                        One of the best furniture agency.
                    </p>
                </div>
                <div className={classes.email_address}>
                    <p>
                        <span />  Enter  your email to get the latest news
                    </p>
                    <label></label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        onChange={handelChange}
                        value={email}
                    />
                    <div className={classes.icons}>
                        <p>Follow us On</p>
                        <div className={classes.icons_box}>
                            <span>
                                <Facebook />
                            </span>
                            <span>
                                <Instagram />
                            </span>

                            <span>
                                <Tiktok />
                            </span>

                            <span>
                                <Youtube />
                            </span>

                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer