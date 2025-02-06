import '../styles/articles.css'
import { NavLink, Link } from 'react-router-dom';
import bookbag from '../assets/bookbag.png'
import macbook from '../assets/macbook.png'
import celcuis from '../assets/celcuis.png'
import therapy from '../assets/therapy.png'
import { MessageSquareText } from 'lucide-react';




export default function Articles(){
    return(  
    <>
        <section className="news">
          <div className="news-container">
         
            <div className="art-button">
              <h6 className="news-title">
                Directly from The Latest <span>News</span>
              </h6>
    
              {/* <button><Link to='http://computerweekly.com/resources/Web-development'>Discover More</Link></button> */}
            </div>
            <div className="articles">
              <div className="img1">
                <div id="img1">
                  <img
                    src='https://cdn.ttgtmedia.com/visuals/digdeeper/1.jpg'
                    style={{width: "100vw", height: "168px"}}
                  />
                  <div className="dates">Dec 10, 2024</div>
                  <hr className="new1" />
                </div>
                <div className="comments">
                <MessageSquareText />
                  <span className="comments">45 comments</span>
                </div>
                <div className="art-cards">
                  <h6>
                  Accenture claims  CW EMEA is the next big thing in enterprise IT.
                  
                  </h6>
                  <p>
                  The IT services giant says GenAI will transform 40% of all working hours – and it is putting its money where its mouth is with plans to invest $3bn in AI and create 40,000 AI-focused roles.
                  </p>
            
                  <Link to='#'>Read More</Link>
                </div>
              </div>
              <div className="img2">
                <div id="img2">
                  <img
                    src='https://adtmag.com/pages/topic-pages/-/media/ECG/redmondmag/Images/IntroImagesBigSmall/WindowsCloudBlueSkySmall.jpg'
                    style={{width: "100vw", height: "168px"}}
                  />
                  <div className="dates">Nov 25, 2024</div>
                  <hr className="new1" />
                </div>
                <div className="comments">
                <MessageSquareText />
                  <span className="comments">38 comments</span>
                </div>
                <div className="art-cards">
                  <h6>
                  OpenJS Foundation Announces Availability of Node.js 21
                  </h6>
                  <p>
                  The OpenJS Foundation announces Node.js 21, the latest release line of the open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
                  </p>
                  <Link to='#'>Read More</Link>
             
                </div>
              </div>
              <div className="img3">
                <div id="img3">
                  <img
                    src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7d2XhgorVMz7kQVKHSHYNQ.jpeg'
                    style={{width: "100vw", height: "168px"}}
                  />
                  <div className="dates">Jan 26, 2025</div>
                  <hr className="new1" />
                </div>
                <div className="comments">
                <MessageSquareText />
                  <span className="comments">56 comments</span>
                </div>
                <div className="art-cards">
                  <h6>
                  2025 React vs. Vue Tech Stack Comparison for Your Startup.
                  </h6>
                  <p>
                   Backed by Meta, React has been the go-to choice for building dynamic, scalable, and component-based applications since its release in 2013. Its large ecosystem, robust community, and flexibility make it a favorite for projects big and small.
                  </p>
                  <Link to='https://dev.to/abubakersiddique761/2025-react-vs-vue-tech-stack-comparison-for-your-startup-556n'>Read More</Link>
            
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
        </>
        )

}