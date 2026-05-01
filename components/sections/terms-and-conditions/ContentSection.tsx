import Link from "next/link";

const TERMS = [
  {
    title: "Not Everyone Qualifies for a Free Marketing Plan.",
    content:
      "We withhold the right to determine who is a fit for our free Marketing Plan. Not everyone who requests one will receive one.",
  },
  {
    title: "No Guarantee of a Specific Result.",
    content:
      "Regardless of any perceived representation to the contrary, Agency in no way guarantees a specific result for Client. Client understands and agrees that they are paying the Agency as a service to generate results, but that results are never guaranteed. It is understood and agreed to that the Agency has no control over Google, Meta, or other advertising platforms and if they decide to make changes to their advertising platforms.",
  },
  {
    title: "Non-Disparagement.",
    content:
      "The Parties agree not to disparage, slander, or defame, directly or indirectly, each other or its principals, agents, officers, owners, directors, or employees whether during the Term or after termination of this Agreement. Further, this term shall apply, without limitation, to all forms of social media and online forums. Nothing herein shall prevent any Party from making any truthful statement in connection with any legal proceedings or with any investigation by any governmental authority.",
  },
  {
    title: "Limitation of Liability.",
    content:
      "Agency does not make any warranties, whether expressed or implied, regarding the performance of the services it provides. EXCEPT AS EXPRESSLY SET FORTH IN THIS PARAGRAPH: (a) AGENCY SHALL HAVE NO LIABILITY FOR ANY SERVICES PROVIDED, INCLUDING ANY LIABILITY FOR NEGLIGENCE; (b) AGENCY MAKES AND CLIENT RECEIVES NO WARRANTIES, EXPRESS, IMPLIED, STATUTORY OR IN ANY OTHER PROVISION OF THIS AGREEMENT OR ANY OTHER COMMUNICATION; AND (c) AGENCY SPECIFICALLY DISCLAIMS ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE. Subject to the foregoing and notwithstanding anything to the contrary elsewhere contained, in no event shall the maximum aggregate liability of the Agency in connection with this Agreement exceed the monthly fee paid by the Client in the one (1) month preceding the claim. IN NO EVENT SHALL AGENCY BE LIABLE FOR ANY INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR EXEMPLARY DAMAGES OF ANY NATURE IN CONNECTION WITH THIS AGREEMENT AND THE SERVICES PROVIDED HEREUNDER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, BUSINESS INFORMATION OR DATA STORAGE, GOODWILL, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER COMMERCIAL DAMAGES OR LOSSES, EVEN IF AGENCY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
  },
  {
    title: "Force Majeure.",
    content:
      "Neither Party shall be in default or otherwise liable for any delay in or failure of its performance under this Agreement if such delay or failure arises by any reasons beyond its reasonable control, including any act of God, any acts of the common enemy, the elements, earthquakes, floods, fires, epidemics, riots, failures or delay in transportation or communications or utilities, or any act or failure to act by the other Party or such other Party’s officers, employees, agents, or contractors; provided, however, that lack of funds shall not be deemed to be a reason beyond a Party’s reasonable control.",
  },
  {
    title: "Default.",
    content:
      "In the event that Client fails to pay any fees or charges under this Agreement, Agency may immediately pause or discontinue this Agreement, among other available remedies, until the Client cures its default.",
  },
  {
    title: "Governing Law.",
    content:
      "This Agreement shall be governed by the laws of the state of Michigan without regard to any choice-of-law provisions.",
  },
  {
    title: "Attorney’s Fees.",
    content:
      "In any litigation, arbitration, or dispute arising under or relating to this Agreement, each Party shall be entitled to recover reasonable attorney’s fees and litigation costs.",
  },
  {
    title: "Entire Agreement.",
    content:
      "This Agreement constitutes the entire agreement between the parties with respect to the subject matter addressed herein and supersedes all prior communications, agreements, or understandings, written or oral, between the Parties. Any amendment to this Agreement must be in writing and signed by both Parties.",
  },
  {
    title: "Severability.",
    content:
      "The provisions of this Agreement are severable, and if any provision of this Agreement is determined to be invalid or unenforceable under any controlling law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions of this Agreement.",
  },
  {
    title: "Assignment and Successors; Binding Effect.",
    content:
      "This Agreement shall be binding upon and inure to the benefit of any and all heirs, successors, and assigns of each of the parties hereto. Agency shall have the right to assign all or any portion of its rights under this Agreement to a third-party assignee without the consent of Client, provided that the Agency shall provide written notice of such assignment to Client contemporaneously with or promptly following any such assignment. Neither this Agreement nor any of the rights or obligations hereunder may be assigned by Client without the prior written consent of Agency.",
  },
] as const;

const PAYMENT_BULLETS = [
  "The pay amount is based on the fee in the signed agreement. The auto-debit will begin based on the first month of active service.",
  "If there are no fee changes, either increase or decrease, I agree to allow at least, Think Creative to continue to charge the card on file.",
  "Please note that there will be a 3% processing fee for credit card payments.",
] as const;

const textStyle =
  "font-['IBM_Plex_Sans'] text-[16px] lg:text-[24px] leading-[150%] tracking-[-1%] text-black";

const headingStyle =
  "font-['Geist'] text-[28px] lg:text-[48px] font-semibold leading-[120%] tracking-[-2%] text-black";

export default function TermsContentSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-30">
      <div className="mx-auto max-w-468 px-6 lg:px-50">
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* ── Intro ──────────────────────────────────────────────── */}
          <p className={textStyle}>
            Think Creative is a digital marketing and website development agency that provides unique
             strategy, creative services, and marketing communications to help you break through the 
             noise and authentically connect with your market.
          </p>

          <p className={textStyle}>
            As a strategic partner, we ‘Think’ outside the box to implement innovative strategies to 
            increase your leads and profitability, improve your operational efficiency, and build and 
            sustain brand trust with your prospects and customers.
          </p>

          <p className={textStyle}>
            At Think Creative, we provide vision, strategy, and message clarity to effectively resonate 
            with your target audience in the rapidly changing world of digital marketing and technology, 
            so you can focus on growing your business.
          </p>

          {/* ── Numbered terms ─────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {TERMS.map((term, i) => (
              <p key={i} className={textStyle}>
                <strong className="font-bold">
                  {i + 1}. {term.title}
                </strong>{" "}
                {term.content}
              </p>
            ))}
          </div>

          {/* ── Contact Us ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>Contact Us</h2>
            <p className={textStyle}>
              Should you have any questions, then please contact us.
            </p>
          </div>

          {/* ── Payment Authorization ──────────────────────────────── */}
          <div className="flex flex-col gap-3 mt-6 lg:mt-8">
            <h2 className={headingStyle}>Payment Authorization</h2>

            <p className={textStyle}>
              I certify that I am an authorized signer or have permission on behalf of the company to enter payment information. I hereby give permission to Think Creative to charge my debit/credit card or electronically debit my bank account (ACH transfer) for the agreed-upon amount each month.
              <br />
              The agreed-upon amount is based on the fee in the signed agreement. The auto-debit will occur on the same day each month based on the initial “kick-off” date. If there are any fee changes, either increase or decrease (due to scope of work), Think Creative is authorized to debit that amount.
              Please note that there will be a 3% processing fee for credit card payments.
            </p>

            <br />
            <p className={textStyle}>
              If you would like to update your credit card or banking information, please {" "}
              <Link href="/contact-us" className="font-bold text-[#FF5F1F] underline">
              contact us.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
