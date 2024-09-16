import Navbar from "../components/Main/Navbar/Navbar";
import Expandable from "../components/Policies/Expandable";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const TermsPolicy = ({ dropdown, setDropdown }) => {
  return (
    <div className="">
      <Navbar dropdown={dropdown} setDropdown={setDropdown} isLoaded={true} />

      <div className="lg:flex justify-around lg:gap-[30px] pt-[160px] px-[20px] lg:px-[60px] 2xl:px-[180px] text-white">
        <section className="lg:max-w-[70%]">
          <div className="pb-8">
            <h2 className="text-[28px] font-medium mb-5">
              FORMIS TERMS OF SERVICE
            </h2>
            <p className="opacity-70">
              We understand it might be appealing to bypass these Terms of
              Service, but it's crucial to define what you can anticipate from
              Formis as you utilize our services and what we, in turn, expect
              from you.
            </p>
          </div>

          <Expandable
            id={1}
            title="Your relationship with Formis."
            description="These terms establish the relationship between you and Formis. Essentially, we grant you the right to use our services provided you adhere to these terms, which mirror the way Formis's business operates and how we generate revenue. When we refer to 'Formis', 'we', 'us', and 'our', we are referencing Formis Health Technologies Private Limited and its affiliates, excluding any local entities based in India."
          />
          <Expandable
            id={2}
            title="Eligibility."
            description="You must be at least 18 years old to use the Services. If you are a resident of the United States and under 18, you may only use the Services with the supervision of a parent or legal guardian who agrees to be bound by these Terms."
          />
          <Expandable
            id={3}
            title="User Accounts"
            description="You may need to create an account to access certain features of the Services. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or any other security breach."
          />
          <Expandable
            id={4}
            title="Third-Party Links and Content"
            description="The Services may contain links to or integrate with third-party websites, services, and content. Formiss is not responsible for the content or privacy practices of any third-party websites, services, or content. You are solely responsible for your interactions with any third-party websites, services, or content."
          />
          <Expandable
            id={5}
            title="Content Ownership"
            description="You retain all ownership rights to the content you submit to the Services. However, by submitting content to the Services, you grant Formiss a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, publish, and distribute such content in connection with the Services."
          />
          <Expandable id={6} title="Acceptable Use">
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                To infringe on the intellectual property rights of others.
              </li>
              <li>
                To transmit or post any content that is unlawful, harmful,
                threatening, abusive, harassing, defamatory, vulgar, obscene,
                hateful, or racially or ethnically offensive.
              </li>
              <li>
                To interfere with or disrupt the Services or any servers or
                networks connected to the Services.
              </li>
              <li>
                To attempt to gain unauthorized access to the Services or any
                other accounts or systems connected to the Services.
              </li>
              <li>To violate any applicable laws or regulations.</li>
              <li>
                To use the Services to collect or store personal information
                about other users without their consent.
              </li>
              <li>
                To engage in any activity that could compromise the privacy or
                security of other users.
              </li>
              <li>
                To use the Services for any commercial purpose without our
                express written permission.
              </li>
            </ul>
          </Expandable>
          <Expandable
            id={7}
            title="Termination"
            description="Formis may terminate your access to the Services for any reason, at any time, without notice. Formiss may also remove any content you submit to the Services for any reason, at any time, without notice."
          />
          <Expandable
            id={8}
            title="Disclaimer of Warranties"
            description='The Services are provided "as is" and without any warranties of any kind, express or implied. Formis disclaims all warranties, express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Formiss does not warrant that the Services will be uninterrupted, error-free, or secure.'
          />
          <Expandable
            id={9}
            title="Limitation of Liability"
            description="To the maximum extent permitted by law, Formis shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Services."
          />
          <Expandable
            id={10}
            title="Indemnification"
            description="You agree to indemnify and hold harmless Formiss and its officers, directors, employees, agents, and affiliates from and against any and all claims, losses, damages, liabilities, costs, and expenses (including attorneys' fees) arising out of or in connection with your use of the Services or your violation of these Terms."
          />
          <Expandable
            id={11}
            title="Governing Law"
            description="These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws provisions."
          />
          <Expandable
            id={12}
            title="Severability"
            description="If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect."
          />
          <Expandable
            id={13}
            title="Intellectual Property"
            description="The Services are protected by copyright, trademark, and other intellectual property laws. You may not modify, decompile, or disassemble the Services or remove any copyright or trademark notices from the Services."
          />
          <Expandable id={14} title="Your rights regarding your information.">
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                Access: You have the right to request access to the personal
                information we hold about you.
              </li>
              <li>
                Correction: You have the right to request that we correct any
                inaccurate personal information we hold about you.
              </li>
              <li>
                Deletion: You have the right to request that we delete your
                personal information, subject to certain exceptions.
              </li>
              <li>
                Restriction of Processing: You have the right to request that we
                restrict the processing of your personal information.
              </li>
              <li>
                Objection: You have the right to object to the processing of
                your personal information on grounds relating to your particular
                situation.
              </li>
              <li>
                Data Portability: You have the right to request that we provide
                you with your personal information in a structured, commonly
                used, and machine-readable format.
              </li>
            </ul>
          </Expandable>

          <Expandable id={15} title="Exercising your rights.">
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                Email:{" "}
                <span className="border-b ">dss.validate@formis.org</span>
              </li>
              <li>
                Postal Mail:HD-053, Formis Health Technologies Private Limited,
                WeWork BlueOne Square, Udyog Vihar Phase 4 Road, Gurugram,
                Haryana - 122 016, India.
              </li>
              <li>
                We will respond to your request within a reasonable timeframe,
                usually within 30 days.
              </li>
            </ul>
          </Expandable>

          <Expandable
            id={16}
            title="Dispute Resolution."
            description="Any dispute arising out of or in connection with these Terms shall be resolved by binding arbitration in accordance with the rules of the Arbitration and Conciliation Act, 1996 as amended from time to time. The arbitration shall be conducted in Gurugram, Haryana, and the arbitration award shall be final and binding on the parties."
          />
          <Expandable
            id={17}
            title="Entire Agreement"
            description="These Terms constitute the entire agreement between you and Formiss with respect to your use of the Services. These Terms supersede all prior or contemporaneous communications and proposals, whether oral or written."
          />
          <Expandable
            id={18}
            title="Amendments"
            description="Formis may amend these Terms at any time by posting the amended Terms on the Services. You are responsible for reviewing the Terms periodically for any changes. Your continued use of the Services after the posting of amended Terms constitutes your acceptance of the amended Terms."
          />
          <Expandable
            id={19}
            title="Force Majeure"
            description="Formis shall not be liable for any delay or failure to perform its obligations under these Terms due to causes beyond its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, strikes, or natural disasters."
          />
          <Expandable
            id={20}
            title="Waiver"
            description="No waiver of any breach of any provision of these Terms shall be construed as a waiver of any other provision or of any subsequent breach."
          />
          <Expandable
            id={21}
            title="Governing Language"
            description="These Terms are available in multiple languages for informational purposes only. The English language version of these Terms shall be the controlling version in all respects."
          />
          <Expandable
            id={22}
            title="Confidentiality of Protected Health Information"
          >
            <p>
              If you choose to provide Protected Health Information ("PHI")
              through the Services, you understand and agree that your PHI will
              be governed by our HIPAA Privacy Notice, which is available <Link to="/privacy-policy" className="cursor-pointer border-b border-white">here.</Link>
            </p>
          </Expandable>

          <Expandable id={23} title="What you can expect from Formis">
            <p>
              We offer a diverse array of services governed by these terms,
              including:
            </p>
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>Healthcare and IT applications.</li>
              <li>Software platforms</li>
              <li>Integrated services embedded in third-party apps or sites</li>
              <li>
                Devices and technology solutions tailored for healthcare and IT
                needs
              </li>
              <li>
                Facilitation of clinical services such as diagnostics,
                pathology, radiology.
              </li>
              <li>
                Facilitation of Hospital at Home through the use technology and
                human - presence.
              </li>
            </ul>
          </Expandable>

          <div className="mt-16">
            <div className="mb-16">
              <p className="opacity-70 mb-4">
                Many of these services also feature content with which you can
                interact or engage.
              </p>
              <p className="opacity-70">
                Our services are engineered to work in unison, simplifying your
                transition between different tasks. For instance, if your
                digital health record includes a schedule for medication, you
                can easily track and manage your intake schedule within the same
                ecosystem.
              </p>
            </div>
            <div className="mb-16">
              <p className="opacity-70">
                We are continually evolving our technologies and offerings to
                enhance our services. This includes employing advanced
                methodologies like data analytics and AI to refine our services
                and deliver superior solutions in healthcare and IT. As part of
                this ongoing evolution, we might introduce or discontinue
                features, adjust limits to our services, and initiate new
                offerings or retire old ones. When our service involves
                downloadable software, it may automatically update on your
                device to ensure you have the latest version or features. Some
                services offer you control over these automatic updates.
              </p>
            </div>
            <div className="mb-16">
              <p className="opacity-70">
                Should there be material changes that adversely affect your use
                of our services, or if we contemplate discontinuing a service,
                we will provide reasonable advance notice, except in urgent
                cases like countering misuse, legal obligations, or addressing
                security and functionality concerns. We also endeavor to offer
                options to manage or export your information, adhering to
                applicable laws and regulations.
              </p>
            </div>
          </div>
        </section>

        <section className="hidden lg:flex ">
          <ul className="border-l border-white flex flex-col">
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#1"
            >
              Your relationship with Formis.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#2"
            >
              Eligibility.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#3"
            >
              User Accounts
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#4"
            >
              Third-Party Links and Content
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#5"
            >
              Content Ownership
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#6"
            >
              Acceptable Use
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#7"
            >
              Termination
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#8"
            >
              Disclaimer of Warranties
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#9"
            >
              Limitation of Liability
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#10"
            >
              Indemnification
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#11"
            >
              Governing Law
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#12"
            >
              Severability
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#13"
            >
              Intellectual Property
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#14"
            >
              Your rights regarding your information.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#15"
            >
              Exercising your rights.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#16"
            >
              Dispute Resolution.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#17"
            >
              Entire Agreement
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#18"
            >
              Amendments
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#19"
            >
              Force Majeure
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#20"
            >
              Waiver
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#21"
            >
              Governing Language
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#22"
            >
              Confidentiality of Protected Health Information
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#23"
            >
              What you can expect from Formis
            </a>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPolicy;
