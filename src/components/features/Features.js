
import s from './Features.module.scss';

function Features() {
    return (
        <>

    <div className={s.features}>
        <div className={s.container text-center border border-dark bg-light}>
            <div className={s.row border border-primary}>
                <div className={s.col border border-danger}>
                    <h2>ABOUT US</h2>
                    <span>Read about our app</span>
                </div>
            </div>
            <div className={s.row justify-content-center border border-primary}>
                <div className={s.col-7 col-sm-5 col-md-3 col-lg-2 border border-danger}>
                    <div className={s.img-shape rounded-circle}>
                        <img src="" alt="">
                    </div>
                    <h3>Overview</h3>
                    <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
                </div>
                <div className={s.col-7 col-sm-5 col-md-3 col-lg-2 border border-danger}>
                    <div className={s.img-shape rounded-circle}>
                        <img src="" alt="">
                    </div>
                    <h3>Files</h3>
                    <p>No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</p>
                </div>
                <div className={s.col-7 col-sm-5 col-md-3 col-lg-2 border border-danger}>
                    <div className={s.img-shape rounded-circle}>
                        <img src="" alt="">
                    </div>
                    <h3>Meeting chats</h3>
                    <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
                </div>
                <div className={s.col-7 col-sm-5 col-md-3 col-lg-2 border border-danger}>
                    <div className={s.img-shape rounded-circle}>
                        <img src="" alt="">
                    </div>
                    <h3>Save events</h3>
                    <p>Nisl idque mel ea, nominati voluptatum.</p>
                </div>
            </div>
            <div className={s.row justify-content-center border border-primary}>
                <div className={s.col col-md-4 border border-danger}>
                    <button className={s.text-danger}>Read more</button>
                    <span>OR</span>
                    <button className={s.text-primary}>Get started</button>
                </div>
            </div>
        </div>
    </div>
        
    </>    
    
    );
}

export default Features;
