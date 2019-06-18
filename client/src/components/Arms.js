import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import Home from './Home'

import Iframe from 'react-iframe'
// import './Styles.css'
import './Arms.css'


class Arms extends Component {
    render() {
        return (
            <div>
                
                <nav className='home-btn'>
                    <Link to="/Home">Home</Link>
                </nav>
                <h1 className="title-arms">Git Arms Yoked</h1> 
                <div>
                    <div>
                    <br />
                    <h1 className="title2-bi">Bicep's</h1>
                    <br />
                        <div className="bi-vid-container">
                            <Iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/1PEKENchiuQ" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    </div>
                    {/* <div className="bi-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <h3 className="bi-description"> Description:</h3> 
                    <p className='bi-p'>
                        In this 2-part video series of the best bicep and tricep workout, 
                        I’m going to be discussing the best arm workout and the best arm 
                        exercises based on science '(10 studies)' and our anatomical 
                        understanding of the arms. In part 1 of this series, I will be 
                        discussing the best bicep exercises and the best bicep workout 
                        for size and shape. The bicep curls variations shown in this video 
                        will help tremendously in putting more mass on your arms and will 
                        help develop your “bicep peak”. But it’s important that you don’t 
                        simply think about “getting bigger biceps”, as that should be the 
                        goal but equally as important is the shape and definition of your 
                        biceps. In order to get well-defined biceps and arms you need to 
                        train each part of the biceps – the long head, the short head, 
                        and the brachialis (as well as the brachioradialis). All these 
                        components, if properly trained, will help build an aesthetic 
                        looking arm with size, shape, and definition.
                    </p>
                </div>
                <div>
                    <div className="tri-vid-container">
                    <br />
                    <h1 className="title2-tri">Tricep's</h1>
                    <br />
                        <div>
                            <Iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/osUnjgwoh_Y" 
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    </div>
                    {/* <div className="tri-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <h3 className="tri-description"> Description:</h3>
                    <p className='tri-p'>
                        In this part 2 video of my arm series, I will discuss the best 
                        tricep workout to hit every triceps head based on current scientific 
                        literature and our anatomical understanding of the arms. Although 
                        it’s important to know that all 3 tricep heads '(long head, lateral head, and medial head)' 
                        will be activated in all movements, we can emphasize the involvement 
                        of each of them by choosing the right exercises for each head of the 
                        triceps which in a way will provide “tricep head isolation”. These 
                        exercises will not only help with increasing tricep size and getting 
                        bigger triceps with that “horseshoe triceps” effect, they will also 
                        help in improving the overall definition of your triceps and allowing 
                        each head to grow in proportion with each other. In my opinion, these 
                        are the best exercises for bigger triceps and putting on more tricep 
                        mass while keeping them in proportion.
                    </p> 
                </div>
                <div>
                    <div className="shoulders-vid-container">
                    <br />
                    <h1 className="title2-shoulders">Shoulders</h1>
                    <br />
                        <div>
                            <Iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/2Vprklw8cu8" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    </div>
                    {/* <div className="shoulders-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <h3 className="shoulders-description"> Description:</h3>
                    <p className='shoulders-p'>
                        When it comes to the “best shoulder workout”, you have to consider training 
                        all three heads of the shoulder. These include the front delt, mid delt 
                        "(or “side delt”)" and the rear delt. These three heads are what really build 
                        huge shoulders and give a “3d shoulders” or “cannonball” look. Although all 
                        3 heads will be activated to an extent during all shoulder exercises, as shown 
                        in the literature certain shoulder heads can be emphasized by choosing the 
                        right shoulder exercises and manipulating the way you perform them. It’s also 
                        important to note that the front delts already get sufficient activation in 
                        many pressing movements. Thus, you should focus more on the development of the 
                        lateral and posterior '(mid and side)' delts in order to build bigger delts. In 
                        this video I’ll go through the best shoulder exercises and the best shoulder 
                        workout for mass based on scientific literature and our anatomical understanding 
                        of the shoulder muscles.
                    </p> 
                </div>
                <div>
                    <div className="forearms-vid-container">
                    <br />
                    <h1 className="title2-forearms">Forearms</h1>
                    <br />
                        <div>
                            <Iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/0XS0j1Gtobw" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </Iframe>
                        </div>
                    </div>
                    {/* <div className="forearms-diagram-container">
                        <img className='' alt='' src='' />
                    </div> */}
                    <h3 className="forearms-description"> Description:</h3>
                    <p className='forearms-p'>
                        When it comes to growing big forearms and improving your grip strength, 
                        you need to consider the anatomy of the forearms in order to determine 
                        what the “best forearm workout” might be. In this video I’ll show you 
                        guys the best forearm exercises combined into a forearm workout to help 
                        boost your forearm size as well as your forearm strength '(grip strength)'. 
                        This can be used as a forearm workout for mass but is also considered a 
                        grip strength workout given the inclusion of the suitcase holds and wrist 
                        rollers.
                    </p>
                </div>
                    
            </div>
           
        );
    }
}

export default Arms;