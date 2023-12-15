import { ReactNode } from 'react';

type IContactLayoutProps = {
  yPadding?: string;
  children: ReactNode;
};

const ContactLayout = (props: IContactLayoutProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    <div className="mb-12 text-center">
      <h2 className="text-4xl text-gray-900 font-bold">Join the Waitlist</h2>
        <div className="mt-4 text-xl md:px-20">Grow your business with the help of OptiFlow's business management platform.</div>
    </div>

    <div className="flex flex-col items-center justify-center">
      <form className="w-full max-w-sm" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 required" htmlFor="inline-full-name">
              Full Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500" id="inline-full-name" type="text" placeholder="Jane Doe" name="full-name" required/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
              Email<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500" id="inline-email" type="text" placeholder="example@gmail.com" name="email" required/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="features">
              What features most interest you?
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70">
              <select multiple className="select bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-primary-500" id="features" name="features" required>
                <option value="invoice">Invoice Management</option>
                <option value="inventory">Inventory Management</option>
                <option value="order">Order Fulfillment</option>
                <option value="analytics">Analytics</option>
                <option value="accounts">Accounts Payable/Receivable</option>
                <option value="project">Project Management</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="contact-purpose">
              Industry Focus<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70">
              <select className="select bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500" id="contact-purpose" name="purpose" required>
                <option value="" disabled selected hidden></option>
                <option value="ecommerce">E-commerce</option>
                <option value="retail">Retail</option>
                <option value="pro">Professional Services/Consultant</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="industrials">Industrials (Construction, Real Estate, etc.)</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-message">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500" id="inline-message" placeholder="Hello World!" name="message"/>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-primary-500 hover:bg-primary-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    {props.children}
  </div>
);

export { ContactLayout };
