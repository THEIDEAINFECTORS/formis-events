import React, { useState } from "react";
import Navbar from "../components/Main/Navbar/Navbar";
import Expandable from "../components/Policies/Expandable";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy = ({ dropdown, setDropdown }) => {
  return (
    <div className="">
      <Navbar dropdown={dropdown} setDropdown={setDropdown} isLoaded={true} />

      <div className="lg:flex justify-around lg:gap-[30px] pt-[160px] px-[20px] lg:px-[60px] 2xl:px-[180px] text-white">
        <section className="lg:max-w-[70%]">

          <div className="pb-8">
            <h2 className="text-[28px] font-medium mb-5">
              FORMIS PRIVACY POLICY
            </h2>
            <p className="opacity-70">
              This Privacy Policy is meant to help you understand what
              information we collect, why we collect it and how you can update,
              manage, export and delete your information.
            </p>

            <h3 className="text-[20px] my-5 font-medium">
              Introduction to Formis.
            </h3>
            <p className="opacity-70">
              Formis crafts an array of services, from healthcare management
              apps to IT solutions, aiding millions daily in novel interactions
              with the world, including platforms and integrated products in
              third-party applications. Our services are versatile, offering
              privacy management options, accessible with or without an account,
              and customizable to fit your privacy needs, allowing you to
              explore, create, manage, or simply enjoy content with the
              assurance of control over your personal information.
            </p>
          </div>

          <Expandable
            id={1}
            title="Information that Formis gathers."
            description="We gather data to enhance the services offered to all our users. Our objective is to tailor our services precisely to your needs, from understanding fundamental aspects like your language preferences to more intricate details such as delivering the most relevant advertisements, identifying your key online connections, or curating YouTube videos that align with your interests."
          />
          <Expandable
            id={2}
            title="Things that you create or provide to us."
            description="This includes information you provide when creating an account, submitting forms, making purchases, contacting us, or participating in other activities on the Services. This may include your name, email address, phone number, billing information, IP address, device information, and browsing history."
          />
          <Expandable
            id={3}
            title="From third-party or publicly available sources."
            description="We obtain data from third parties and public sources, including analytics providers, advertising networks, and healthcare partners, as well as from publicly available sources like Companies House and the Electoral Register. Specifically for healthcare-related data, we may receive information from healthcare providers, insurance companies, or other entities you have interacted with within the healthcare ecosystem."
          />
          <Expandable
            id={4}
            title="Categories of personal information we collect."
          >
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                Identifiers: Name, email address, postal address, phone number,
                account login information, social security number (only if
                required by law or for healthcare services).
              </li>
              <li>
                Internet and Network Activity: IP address, browsing history,
                search queries, device information, cookie identifiers.
              </li>
              <li>
                Commercial Information: Payment information, purchase history,
                product preferences.
              </li>
              <li>
                Professional or Employment Information: If you choose to provide
                it, this may include your job title, department, and other
                work-related information.
              </li>
              <li>
                Protected Health Information (PHI): If you choose to provide it,
                we may collect PHI such as health conditions, medical records,
                treatment history, or other sensitive health-related
                information.
              </li>
            </ul>
          </Expandable>
          <Expandable id={5} title="Purposes for using your information.">
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                To provide and improve the Services: This includes personalizing
                your experience, remembering your preferences, suggesting
                relevant forms, and troubleshooting any issues.
              </li>
              <li>
                To communicate with you: We may contact you about your account,
                orders, service updates, or to respond to your inquiries.
              </li>
              <li>
                To send you marketing and promotional communications: With your
                consent, we may send you emails or other communications about
                our products or services that we believe may be of interest to
                you.
              </li>
              <li>
                To analyze website traffic and usage: We use your information to
                understand how people use the Services and to identify areas for
                improvement.
              </li>
              <li>
                To detect and prevent fraud and security threats: We use your
                information to protect against unauthorized access, fraud, and
                other illegal activity.
              </li>
              <li>
                To comply with legal and regulatory requirements: We may use
                your information to comply with applicable laws and regulations,
                including those related to HIPAA.
              </li>
            </ul>
          </Expandable>
          <Expandable
            id={6}
            title="Legal bases for processing your information."
          >
            <ul className="list-disc pl-10 flex flex-col gap-2">
              <li>
                To provide and improve the Services: This includes personalizing
                your experience, remembering your preferences, suggesting
                relevant forms, and troubleshooting any issues.
              </li>
              <li>
                Contract: When necessary to perform a contract with you, such as
                providing access to the Services or completing a purchase.
              </li>
              <li>
                Legal obligation: To comply with applicable laws and
                regulations, such as those related to fraud prevention or
                reporting certain medical conditions.
              </li>
              <li>
                Legitimate interests: To fulfill our legitimate interests, such
                as improving the Services, preventing fraud, and protecting the
                security of our systems. However, we will only do this when our
                legitimate interests are not overridden by your privacy
                interests.
              </li>
            </ul>
          </Expandable>
          <Expandable
            id={7}
            title="Sharing your information."
            description="Several Formis services offer the flexibility to share information with others according to your preferences. For instance, you might choose to share certain data publicly or opt for more private, restricted sharing settings. It's important to note that when you share information publicly, it could become accessible through various search engines. At Formis, we empower you with the control to manage your sharing settings while providing guidance on the implications of different sharing options."
          />
          <Expandable
            id={8}
            title="Service providers"
            description="We may share your information with third-party service providers who help us operate the Services, such as payment processors, email service providers, and data analytics providers."
          />
          <Expandable
            id={9}
            title="Professional advisors"
            description="We may share your information with our lawyers, accountants, and other professional advisors."
          />
          <Expandable
            id={10}
            title="Law enforcement and government officials"
            description="We may share your information with law enforcement or government officials as required by law or to comply with a subpoena or court order."
          />
          <Expandable id={11} title="Data security measures.">
            <p className="mb-2">
              All Formis products are developed with robust security features
              designed to perpetually safeguard your information. Our dedication
              to service maintenance allows us to gather insights that help in
              preemptively identifying and neutralizing security threats before
              they impact you. Should we encounter any substantial risk, we are
              committed to alerting you promptly and providing guidance on how
              to enhance your protection.
            </p>
            <p>
              At Formis, we are relentless in our efforts to shield both you and
              our systems against unauthorized access, alteration, disclosure,
              or destruction of information in our possession.
            </p>
          </Expandable>
          <Expandable
            id={12}
            title="Encryption"
            description="We employ communication encryption with SSL/TLS and asymmetric techniques for data transmission, alongside AES for data at rest, and MD5 hashing for integrity verification, ensuring comprehensive protection of your personal information (PII)."
          />
          <Expandable
            id={13}
            title="Access controls"
            description="We limit access to your personal information to authorized personnel, such as employees who require it for their job responsibilities, IT staff for data management and security, and select third-party service providers under strict contractual confidentiality obligations. Each access is logged and audited to ensure compliance and security."
          />
          <Expandable
            id={14}
            title="Regular security reviews"
            description="We conduct systematic audits, penetration testing, and vulnerability assessments at scheduled intervals and post significant system changes. These reviews aim to ensure continuous protection against emerging threats by evaluating and updating our security infrastructure and procedures accordingly."
          />
          <Expandable id={15} title="Your rights regarding your information.">
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
          <Expandable id={16} title="Exercising your rights.">
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
            id={17}
            title="Children's privacy."
            description="Our Services are intended for users above the age of 16. We do not
              intentionally gather personal information from users under 16. If
              you, as a parent or guardian, become aware that your child has
              supplied us with their personal information, please reach out to
              us promptly for further action."
          />
          <Expandable
            id={18}
            title="Data transfers."
            description="Formis operates servers globally, meaning your information might
              be processed on servers situated beyond your country of residence.
              While data protection laws differ worldwide, some offering more
              comprehensive safeguards than others, we adhere uniformly to the
              protections outlined in our policy, irrespective of where the data
              is processed. We are also committed to abiding by various legal
              frameworks that govern data transfer. In instances of formal
              written complaints, Formis engages directly with the complainant.
              We collaborate with relevant regulatory bodies, including local
              data protection authorities, to address any issues concerning your
              data transfer that are not resolved directly with you. Our aim is
              to ensure a secure, lawful, and transparent handling of your
              personal information."
          />

          <div className="mt-16">
            <p className="text-lg mb-4">When this policy applies.</p>
            <p className="opacity-70">
              This Privacy Policy is applicable to all services provided by
              Formis Health Technologies Private Limited and its affiliates,
              encompassing our varied health and IT services, as well as any
              services we offer on third-party platforms, including our
              advertising services. It's important to note that this Privacy
              Policy is not relevant for services that possess their own
              distinct privacy policies, which do not incorporate this Privacy
              Policy.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-lg mb-4">
              Exceptions to this privacy policy include:
            </p>
            <ul className="list-disc pl-10 flex flex-col gap-2 opacity-70">
              <li>
                The data handling practices of other entities and organizations
                that advertise our services.
              </li>
              <li>
                Services provided by external companies or individuals,
                including products or sites they may offer integrating Formis
                services covered under this policy, or products or sites that
                appear in your search results or are linked from our services.
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="text-lg mb-4">Changes to this policy.</p>
            <p className="opacity-70">
              At Formis, we periodically update this Privacy Policy to reflect
              changes in our practices or in regulatory requirements. Rest
              assured, any amendments will not diminish your rights without your
              express consent. The date of the most recent revisions will always
              be posted, and we will maintain accessible archives of previous
              versions for your perusal. For substantial modifications, we will
              ensure to provide a more conspicuous notice, which may include
              email notifications for significant changes to the Privacy Policy.
              Your continued use of our services following these updates implies
              acceptance of the revised policy terms.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-lg mb-4">Adherence to standards.</p>
            <p className="opacity-70">
              Formis is committed to upholding the highest standards of data
              protection and privacy, ensuring compliance with ISO 27001, HIPAA,
              CCPA, and regulations related to Protected Health Information
              (PHI). Our practices are designed to securely manage and protect
              sensitive information, maintaining confidentiality, integrity, and
              availability in line with these recognized frameworks. We
              regularly review and update our procedures to align with the
              evolving guidelines of these standards, demonstrating our
              dedication to regulatory compliance and safeguarding user data.
              Your trust is paramount, and we continually strive to meet and
              exceed industry requirements for data security and privacy.
            </p>
          </div>
          <div className="mt-16">
            <p className="text-lg mb-4">Contact for resolution or queries.</p>
            <p className="opacity-70">
              Should you have inquiries or need further clarification regarding
              this Privacy Policy or how we handle privacy matters, please feel
              free to reach out to us through the contact methods outlined
              previously. We are here to assist and address any concerns you may
              have.
            </p>
          </div>
        </section>

        <section className="hidden lg:flex ">
          <ul className="border-l border-white flex flex-col">
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#1"
            >
              Information that Formis gathers.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#2"
            >
              Things that you create or provide to us.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#3"
            >
              From third-party or publicly available sources.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#4"
            >
              Categories of personal information we collect.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#5"
            >
              Purposes for using your information.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#6"
            >
              Legal bases for processing your information.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#7"
            >
              Sharing your information.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#8"
            >
              Service providers
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#9"
            >
              Professional advisors
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#10"
            >
              Law enforcement and government officials
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#11"
            >
              Data security measures.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#12"
            >
              Encryption
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#13"
            >
              Access controls
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#14"
            >
              Regular security reviews
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#15"
            >
              Your rights regarding your information.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#16"
            >
              Exercising your rights.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#17"
            >
              Children's privacy.
            </a>
            <a
              className="pl-[56px] border-l-4 border-transparent cursor-pointer py-2
                          hover:border-l-4 hover:border-white"
              href="#18"
            >
              Data transfers.
            </a>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
