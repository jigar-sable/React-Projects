import React from 'react'

const Contact = () => {
    return (
        <div class="container my-5 mt-5">

            <h3 class="text-center pt-4 text-primary">Contact us</h3><br />

            <div class="row">
                <div class="col-md-4">
                    <b>Customer service:</b> <br />
                    Phone: +1 129 209 291<br />
                    E-mail: <a href="mailto:support@mysite.com">support@brand.com</a><br /><br />

                    <b>Headquarter:</b><br />
                    Company Inc, <br />
                    Las vegas street 201<br />
                    55001 Nevada, USA<br />
                    Phone: +1 145 000 101<br />
                    <a href="mailto:usa@mysite.com">usa@brand.com</a><br /><br />

                    <b>Hong kong:</b><br />
                    Company HK Litd, <br />
                    25/F.168 Queen<br />
                    Wan Chai District, Hong Kong<br />
                    Phone: +852 129 209 291<br />
                    <a href="mailto:hk@mysite.com">hk@brand.com</a><br />
                </div>

                <div class="col-md-8">
                    <form>
                        <input class="form-control" name="name" placeholder="Name..." /><br />
                        <input class="form-control" name="phone" placeholder="Phone..." /><br />
                        <input class="form-control" name="email" placeholder="E-mail..." /><br />
                        <textarea class="form-control" name="text" placeholder="How can we help you?"></textarea><br />
                        <input class="btn btn-primary" type="submit" value="Send" /><br /><br />
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact
