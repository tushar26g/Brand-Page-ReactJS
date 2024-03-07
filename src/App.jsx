import './App.css'

const App = () => {
    return (
        <div>
            <div>
                <nav>
                    <div className="logo">
                        <img src="/images/brand_logo.png" alt="logo" />
                    </div>

                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Contact</li>
                        <li href="#">About us</li>
                        <li href="#">Contact</li>
                    </ul>

                    <button>login</button>
                </nav>
            </div>
            <div className='mainR'>
                <div>
                    <div>
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className='hero-buttons'>
                        <button>Shop Now</button>
                        <button className='t-btn'>Category</button>
                    </div>
                    <div className='shopping'>
                        <p>Also Available</p>
                        <div className='hero-img'>
                            <img src='/images/flipkart.png' alt='flip'/>
                            <img src='/images/amazon.png' alt='amaz'/>
                        </div>
                    </div>
                </div>
                <div className='shoes'>
                    <img src='/images/shoe_image.png' alt='her'/>
                </div>
            </div>
        </div>
    );
}

export default App;