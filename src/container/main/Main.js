import room_1 from '../../accept/svg/room_1.svg'
import room_2 from '../../accept/svg/room_2.svg'
import room_3 from '../../accept/svg/room_3.svg'
import room_4 from '../../accept/svg/room_4.svg'
import room_5 from '../../accept/svg/room_5.svg'
import room_6 from '../../accept/svg/room_6.svg'
import classes from './main.module.scss'

function Main() {
    return (
        <main className={classes.container_main}>
            <div className={classes.title_box}>
                <h1 className={classes.title}>Minimalist Room</h1>
                <p>It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
            <img src={room_1} alt='' className={classes.room_1} />
            <section className={classes.section}>
                <main className={classes.text_box}>
                    <div className={classes.title_project}>
                        <h2>Project Overview</h2>
                        <p>
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.

                        </p>
                        <p className={classes.text_day}>
                            <span>July 22 - 2022</span>
                            <span>Interior Design - Furniture</span>
                        </p>
                    </div>
                    <div className={classes.title_project}>
                        <h2>Design Process</h2>
                        <p>
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                        </p>
                        <p className={classes.mt_30}>
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                            Online learning with us does not interfere with your daily life.
                            because learning can be done anytime and anywhere.
                        </p>
                    </div>

                </main>
            </section>
            <div className={classes.images}>
                <div className={classes.cupel}>
                    <img src={room_2} alt='' className={classes.cupel_img} />
                    <img src={room_3} alt='' className={classes.cupel_img} />
                </div>
                <div className={classes.single}>
                    <img src={room_4} alt='' className={classes.single_img} />
                </div>
                <div className={classes.cupel}>
                    <img src={room_5} alt='' className={classes.cupel_img} />
                    <img src={room_6} alt='' className={classes.cupel_img} />
                </div>


            </div>
        </main>
    )
}

export default Main