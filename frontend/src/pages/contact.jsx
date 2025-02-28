import './contact.css';

function Contact() {
    return (
        <div className="contact page container">
            <h1 className="text-center text-success mb-2">Contact Us</h1>
            <p className="text-center text-muted mb-2">We'd love to hear from you! Reach out with any questions or feedback.</p>
            
            <div className="row">
                <div className="col-md-6">
                    <h4 className="text-success">Our Store</h4>
                    <p><strong>Address:</strong> 123 Green Market Street, Fresh City</p>
                    <p><strong>Phone:</strong> +1 (234) 567-890</p>
                    <p><strong>Email:</strong> support@organika.com</p>
                    <p><strong>Hours:</strong> Mon-Fri: 9AM - 6PM</p>
                </div>
                <div className="col-md-6">
                    <h4 className="text-success">Send us a message</h4>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="4" placeholder="Write your message here" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
