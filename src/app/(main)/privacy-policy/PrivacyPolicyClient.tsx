"use client";

import {
  Database,
  Settings2,
  Share2,
  ShieldCheck,
  Clock,
  UserCheck,
  Baby,
  Link2,
  RefreshCw,
  Mail,
  Landmark,
} from "lucide-react";
import { LegalPageLayout, type LegalSection } from "@/components/legal/LegalPageLayout";

const SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> This includes information
            that can be used to identify you, such as your name, email
            address, phone number, company name, job title, and any other
            information you voluntarily provide to us through forms on our
            Website, during account registration, or in communication with
            us.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you access and use our Website and Services, including your IP
            address, browser type, operating system, referring URLs, pages
            visited, and the dates and times of your visits.
          </li>
          <li>
            <strong>Device Information:</strong> We may collect information
            about the device you use to access our Website or Services,
            including the device model, operating system, unique device
            identifiers, and mobile network information.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We may use
            cookies, web beacons, and other tracking technologies to collect
            information about your browsing activities and preferences. You
            can control cookies through your browser settings.
          </li>
          <li>
            <strong>Information You Provide Voluntarily:</strong> This
            includes any information you provide to us through surveys,
            feedback forms, customer support interactions, or other means.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    icon: Settings2,
    title: "How We Use Your Information",
    content: (
      <>
        <p>We may use your information for the following purposes:</p>
        <ul>
          <li>
            <strong>To Provide and Maintain our Services:</strong> To operate
            our Website and provide you with the Services you have
            requested.
          </li>
          <li>
            <strong>To Communicate with You:</strong> To respond to your
            inquiries, provide customer support, and send you important
            notices and updates about our Services.
          </li>
          <li>
            <strong>To Personalize Your Experience:</strong> To tailor our
            content and offerings to your interests and preferences.
          </li>
          <li>
            <strong>To Improve our Website and Services:</strong> To analyze
            usage patterns and trends, and to develop and enhance our
            Website and Services.
          </li>
          <li>
            <strong>For Marketing and Promotional Purposes:</strong> With
            your consent where required by applicable law, we may send you
            promotional emails and other marketing communications about our
            Services and related offerings.
          </li>
          <li>
            <strong>For Security and Fraud Prevention:</strong> To protect
            our Website and Services from unauthorized access, misuse, and
            fraudulent activities.
          </li>
          <li>
            <strong>To Comply with Legal Obligations:</strong> To comply with
            applicable laws, regulations, and legal processes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share-information",
    icon: Share2,
    title: "How We Share Your Information",
    content: (
      <>
        <p>
          We may share your information with the following categories of
          recipients:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may engage third-party
            service providers to assist us in operating our Website,
            providing our Services, conducting business analytics,
            processing payments, sending emails, and performing other
            functions.
          </li>
          <li>
            <strong>Business Partners:</strong> We may share information
            with our business partners to offer you integrated services or
            promotions.
          </li>
          <li>
            <strong>Affiliates:</strong> We may share information with our
            affiliated companies for internal business purposes.
          </li>
          <li>
            <strong>Legal Authorities:</strong> We may disclose your
            information to law enforcement agencies, government authorities,
            or other third parties if required by law or legal process, or
            if we believe in good faith that such disclosure is necessary
            to protect our rights, property, or safety.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of all or a portion of our assets, your
            information may be transferred to the acquiring entity.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your
            information with third parties with your explicit consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    icon: ShieldCheck,
    title: "Data Security",
    content: (
      <p>
        We take reasonable security measures to protect your personal
        information from unauthorized access, use, disclosure, alteration,
        or destruction. These measures include encryption, firewalls,
        secure servers, and access controls. However, please understand that
        no method of transmission over the internet or method of electronic
        storage is completely secure, and we cannot guarantee the absolute
        security of your information.
      </p>
    ),
  },
  {
    id: "data-retention",
    icon: Clock,
    title: "Data Retention",
    content: (
      <p>
        We will retain your personal information for as long as necessary
        to fulfill the purposes outlined in this Privacy Policy, unless a
        longer retention period is required or permitted by law.
      </p>
    ),
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have
          certain rights regarding your personal information, including the
          right to:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request access to the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Request that we correct any
            inaccurate or incomplete personal information.
          </li>
          <li>
            <strong>Deletion:</strong> Request the deletion of your personal
            information.
          </li>
          <li>
            <strong>Objection to Processing:</strong> Object to the
            processing of your personal information for certain purposes,
            such as direct marketing.
          </li>
          <li>
            <strong>Restriction of Processing:</strong> Request the
            restriction of the processing of your personal information.
          </li>
          <li>
            <strong>Data Portability:</strong> Request to receive your
            personal information in a structured, commonly used, and
            machine-readable format.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> If we are processing your
            personal information based on your consent, you have the right
            to withdraw your consent at any time.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us using the contact
          information provided below. We may require you to verify your
          identity before responding to your requests.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    content: (
      <p>
        Our Website and Services are not intended for children under the
        age of 15. We do not knowingly collect personal information from
        children. If you are a parent or guardian and believe that your
        child has provided us with personal information, please contact us
        immediately, and we will take steps to delete such information.
      </p>
    ),
  },
  {
    id: "links-to-other-websites",
    icon: Link2,
    title: "Links to Other Websites",
    content: (
      <p>
        Our Website may contain links to third-party websites. We are not
        responsible for the privacy practices or the content of these
        websites. We encourage you to review the privacy policies of those
        websites before providing any personal information.
      </p>
    ),
  },
  {
    id: "changes-to-this-policy",
    icon: RefreshCw,
    title: "Changes to this Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our practices or applicable laws. We will post the
        updated Privacy Policy on our Website and indicate the &quot;Last
        Updated&quot; date. Your continued use of our Website or Services
        after the posting of a revised Privacy Policy constitutes your
        acceptance of the changes.
      </p>
    ),
  },
  {
    id: "contact-us",
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions or concerns about this Privacy Policy or
          our privacy practices, please contact us at:{" "}
          <a href="mailto:info@inexterpsolutions.com">
            info@inexterpsolutions.com
          </a>
        </p>
        <p>
          By using our Website and Services, you acknowledge that you have
          read and understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "india-considerations",
    icon: Landmark,
    title: "Important Considerations for India",
    content: (
      <>
        <ul>
          <li>
            <strong>Sensitive Personal Data or Information (SPDI):</strong>{" "}
            Under the IT Rules, certain categories of personal information
            are considered &quot;sensitive personal data or
            information&quot; (SPDI). This includes passwords, financial
            information, health information, biometric information, etc. We
            implement specific security practices and obtain explicit
            consent for its collection and processing.
          </li>
          <li>
            <strong>Reasonable Security Practices and Procedures:</strong> We
            implement and maintain reasonable security practices and
            procedures to protect the personal information we collect as
            mandated by the IT Rules.
          </li>
          <li>
            <strong>Grievance Officer:</strong> In accordance with the IT
            Rules, we have designated a Grievance Officer to address any
            complaints or concerns regarding the processing of personal
            information.
          </li>
        </ul>
        <p>
          <strong>Disclaimer:</strong> For any questions or concerns about
          this Privacy Policy, please contact us at{" "}
          <a href="mailto:info@inexterpsolutions.com">
            info@inexterpsolutions.com
          </a>
          . We will respond to your inquiry within 7 days after verifying
          your identity.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyClient() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      description="How iNextERP Solution collects, uses, discloses, and safeguards your personal information across our website and services."
      lastUpdated="August 10, 2026"
      readTime="8 min read"
      sections={SECTIONS}
      crossLink={{
        label: "Terms & Conditions",
        description:
          "Review the terms that govern your access to and use of our website and services.",
        href: "/terms-and-conditions",
      }}
    />
  );
}
