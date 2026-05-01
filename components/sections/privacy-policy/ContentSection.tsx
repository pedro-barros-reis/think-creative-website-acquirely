import Link from "next/link";

const SUMMARY_ITEMS = [
  "We will never give, sell, rent, or lend your information to anyone.",
  "We will never spam you.",
  "We will never have direct access to your payment methods without your consent.",
  "As part of GDPR compliance, we’ve simplified our privacy policy.",
  "Also as part of GDPR compliance, you can now 1) opt out of all marketing communication at any time from us, 2) request all the data points we have on you without undue delay, and 3) ask us to delete all information we have on you.",
] as const;

const INFO_USES = [
  "To personalize your experience (your information helps us to better respond to your individual needs)",
  "To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)",
  "To process transactions",
] as const;

const textStyle =
  "font-['IBM_Plex_Sans'] text-[16px] lg:text-[24px] leading-[150%] tracking-[-1%] text-black";

const headingStyle =
  "font-['Geist'] text-[28px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-black";

export default function PrivacyPolicyContentSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-30">
      <div className="mx-auto max-w-468 px-6 lg:px-50">
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* ── Intro ──────────────────────────────────────────────── */}
          <p className={textStyle}>
            By working with and using thinkcreative.com, you agree to the collection and use 
            of your information as stated in this policy. If any changes are made to our privacy 
            policy we will update it on this page.
          </p>

          {/* ── Summary ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>Summary</h2>
            <ul className={`${textStyle} list-disc pl-6 lg:pl-8 space-y-3`}>
              {SUMMARY_ITEMS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── How we treat your information ──────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-8 mt-6 lg:mt-8">
            <h2 className={headingStyle}>How we treat your information</h2>

            <p className={textStyle}>
              <strong className="font-bold">
                We will never give, sell, rent, or lend your information to anyone.
              </strong>
              <br />
              – We respect your privacy and your trust. We will therefore never give, sell, rent, or lend your information to anyone without your express permission.
            </p>

            <p className={textStyle}>
              <strong className="font-bold">We will never spam you.</strong>
              <br />
              – We do send updates about your account, regular correspondence between you and your account strategist, blog postings, news about Think Creative, and newsletters. You have the ability to unsubscribe at any time.
            </p>

            <p className={textStyle}>
              <strong className="font-bold">
                We will never have direct access to your payment methods without
                your consent.
              </strong>
              <br />
              – When signing up for our services, we do require that you sign up for a month to month billing pattern that automatically deducts payments from your method of payment. We will encrypt your payment information and we will not be able to go in and charge more than you have specified without your consent.
            </p>

            <p className={textStyle}>
              Any of the information we collect from you may be used in one of
              the following ways:
            </p>

            <ul className={`${textStyle} list-disc pl-6 lg:pl-8 space-y-3`}>
              {INFO_USES.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── What information do we collect? ────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>What information do we collect?</h2>

            <p className={textStyle}>
              We collect information from you when you fill out the form on our site and when asking you 
              questions about your business and making the appropriate decisions when creating 
              strategies in regards to your marketing efforts. When registering on our site, as appropriate, 
              you may be asked to enter your: name, e-mail address, phone number, or credit card information.
            </p>

            <p className={textStyle}>
              <strong className="font-bold">Personal:</strong> name, e-mail addresses, phone numbers.
              <br />
              <strong className="font-bold">Transaction:</strong> bills and payments.
            </p>
          </div>

          {/* ── How do we protect your information? ────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>
              How do we protect your information?
            </h2>

            <p className={textStyle}>
              We implement an SSL (secure socket layer) that protects your payment information.
            </p>
          </div>

          {/* ── Do we use cookies? ─────────────────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <p className={`${textStyle} font-bold`}>Do we use cookies?</p>

            <p className={textStyle}>
              Cookies, sometimes known as pixels, are small files that a site transfers to your computer 
              that can recognize your browser and remember certain information. We use cookies to keep 
              track of advertisements and compile aggregate data about site traffic and site interaction so 
              that we can offer better site experiences and tools in the future. You can always delete or 
              opt out of this cookie/pixel experience by clearing your browser cookies.
            </p>
          </div>

          {/* ── California Online Privacy Protection Act ───────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <p className={`${textStyle} font-bold`}>
              California Online Privacy Protection Act Compliance
            </p>

            <p className={textStyle}>
              Because we value your privacy, we have taken the necessary precautions to be in 
              compliance with the California Online Privacy Protection Act. We will therefore not 
              distribute your personal information to outside parties without your consent.
            </p>
          </div>

          {/* ── Children's Online Privacy Protection Act ───────────── */}
          <div className="flex flex-col gap-3">
            <p className={`${textStyle} font-bold`}>
              Children’s Online Privacy Protection Act Compliance
            </p>

            <p className={textStyle}>
              We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection 
              Act) as we do not collect any information from anyone under 13 years of age. Our website, 
              products, and services are all directed to people who are at least 13 years old or older.
            </p>
          </div>

          {/* ── Online Privacy Policy Only ─────────────────────────── */}
          <div className="flex flex-col gap-3">
            <p className={`${textStyle} font-bold`}>
              Online Privacy Policy Only
            </p>

            <p className={textStyle}>
              This online privacy policy applies only to information collected through our website and not 
              to information collected offline.
            </p>
          </div>

          {/* ── Terms Of Service ───────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            <p className={`${textStyle} font-bold`}>Terms Of Service</p>

            <p className={textStyle}>
              Please visit our terms of service section establishing the use, disclaimers, and limitations of 
              liability governing the use of our website and services.
            </p>
          </div>

          {/* ── Your Consent ───────────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            <p className={`${textStyle} font-bold`}>Your Consent</p>

            <p className={textStyle}>
              By using our site, you consent to our website’s privacy policy.
            </p>
          </div>

          {/* ── Changes To This Privacy Policy ─────────────────────── */}
          <div className="flex flex-col gap-3">
            <p className={`${textStyle} font-bold`}>
              Changes To Our Privacy Policy
            </p>

            <p className={textStyle}>
              If we decide to change our privacy policy, we will post those changes on this page. This 
              policy was last modified on 10/15/2024.
            </p>
          </div>

          {/* ── Contact Us ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>Contact Us</h2>

            <p className={textStyle}>
              If there are any questions regarding this privacy policy, you may contact us using the 
              information below:
            </p>

            <div className={textStyle}>
              <p>www.thinkcreative.com</p>
              <p>17195 Silver Pkwy #321</p>
              <p>Fenton, MI 48430</p>
              <p>USA</p>
              <p>810-642-3556</p>
            </div>

            <Link
              href="/contact-us"
              className="font-['IBM_Plex_Sans'] text-[16px] lg:text-[24px] leading-[150%] tracking-[-1%] font-bold text-[#FF5F1F] underline transition-opacity hover:opacity-80"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
