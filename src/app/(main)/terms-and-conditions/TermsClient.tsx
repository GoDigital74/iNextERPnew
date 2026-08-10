"use client";

import {
  CheckCircle2,
  Package,
  UserCircle,
  Ban,
  Copyright,
  CreditCard,
  AlertTriangle,
  Scale,
  ShieldAlert,
  Gavel,
  XCircle,
  FileCheck,
  Landmark,
  Mail,
} from "lucide-react";
import { LegalPageLayout, type LegalSection } from "@/components/legal/LegalPageLayout";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using our Website or Services, you acknowledge that
        you have read, understood, and agree to be bound by these Terms,
        including any additional guidelines and future modifications.
      </p>
    ),
  },
  {
    id: "description-of-services",
    icon: Package,
    title: "Description of Services",
    content: (
      <p>
        iNextERP Solution provides ERP software solutions, consulting
        services, and software development solutions focused on retail
        operations. The specific features and functionalities of our
        Services may vary depending on the subscription plan or agreement
        you have with us.
      </p>
    ),
  },
  {
    id: "user-accounts",
    icon: UserCircle,
    title: "User Accounts",
    content: (
      <>
        <p>
          <strong>Account Creation:</strong> If our Services require you to
          create an account, you are responsible for providing accurate and
          complete information during the registration process. You are
          also responsible for maintaining the confidentiality of your
          account credentials (username and password) and for all
          activities that occur under your account.
        </p>
        <p>
          <strong>Account Security:</strong> You agree to notify us
          immediately of any unauthorized access to or use of your account.
          We will not be liable for any loss or damage arising from your
          failure to comply with these security obligations.
        </p>
        <p>
          <strong>Account Termination:</strong> We reserve the right to
          suspend or terminate your account at any time, with or without
          notice, for any reason, including but not limited to a breach of
          these Terms.
        </p>
      </>
    ),
  },
  {
    id: "use-of-website-and-services",
    icon: Ban,
    title: "Use of the Website and Services",
    content: (
      <>
        <p>
          <strong>Permitted Use:</strong> You may use our Website and
          Services for lawful purposes and in accordance with these Terms.
        </p>
        <p>
          <strong>Prohibited Conduct:</strong> You agree not to:
        </p>
        <ul>
          <li>
            Use our Website or Services in any way that violates applicable
            laws or regulations.
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone&apos;s
            use or enjoyment of our Website or Services.
          </li>
          <li>
            Attempt to gain unauthorized access to our Website, Services, or
            related systems or networks.
          </li>
          <li>
            Introduce viruses, worms, or other malicious code to our Website
            or Services.
          </li>
          <li>
            Scrape, data mine, or otherwise extract data from our Website or
            Services without our express written consent.
          </li>
          <li>
            Impersonate any person or entity or misrepresent your
            affiliation with any person or entity.
          </li>
          <li>Interfere with or disrupt the operation of our Website or Services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property-rights",
    icon: Copyright,
    title: "Intellectual Property Rights",
    content: (
      <>
        <p>
          <strong>Our Content:</strong> The Website and its entire contents,
          features, and functionality (including but not limited to text,
          graphics, logos, images, software, and the design, selection, and
          arrangement thereof) are owned by iNextERP Solution, its
          licensors, or other providers of such material and are protected
          by copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </p>
        <p>
          <strong>Your Content:</strong> If you submit, upload, or otherwise
          make available any content through our Services (&quot;Your
          Content&quot;), you retain ownership of Your Content. However, you
          grant us a non-exclusive, worldwide, royalty-free, transferable,
          sub-licensable license to use, reproduce, modify, adapt, publish,
          translate, distribute, and display Your Content in connection with
          the provision of our Services. You represent and warrant that you
          have all necessary rights to grant this license.
        </p>
        <p>
          <strong>Trademarks:</strong> The iNextERP Solution name, logo, and
          all related names, logos, product and service names, designs, and
          slogans are trademarks of iNextERP Solution or its affiliates or
          licensors. You must not use such marks without our prior written
          permission.
        </p>
      </>
    ),
  },
  {
    id: "payment-and-fees",
    icon: CreditCard,
    title: "Payment and Fees",
    content: (
      <>
        <p>
          <strong>Fees:</strong> If you use Services that require payment,
          you agree to pay the applicable fees as described on our Website
          or in your agreement with us.
        </p>
        <p>
          <strong>Payment Terms:</strong> Payment terms will be specified at
          the time of purchase or in your agreement. You agree to provide
          accurate and complete payment information.
        </p>
        <p>
          <strong>Taxes:</strong> You are responsible for any applicable
          taxes related to your use of our Services.
        </p>
        <p>
          <strong>Changes to Fees:</strong> We reserve the right to change
          our fees at any time, with notice to you.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer-of-warranties",
    icon: AlertTriangle,
    title: "Disclaimer of Warranties",
    content: (
      <p>
        Our Website and Services are provided on an &quot;as is&quot; and
        &quot;as available&quot; basis, without any warranties of any kind,
        express or implied, including but not limited to warranties of
        merchantability, fitness for a particular purpose, non-infringement,
        and any warranties arising out of course of dealing or usage of
        trade. We do not warrant that our Website or Services will be
        uninterrupted, error-free, secure, or free of viruses or other
        harmful components.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, in no event shall
        iNextERP Solution, its affiliates, officers, directors, employees,
        agents, suppliers, or licensors be liable for any indirect,
        incidental, special, consequential, or punitive damages (including
        without limitation damages for loss of profits, data, use,
        goodwill, or other intangible losses) arising out of or relating to
        your access to or use of (or inability to access or use) our
        Website or Services, whether based on warranty, contract, tort
        (including negligence), statute, or any other legal theory, even if
        we have been advised of the possibility of such damages. Our total
        liability to you for all claims arising out of or relating to these
        Terms or your use of our Website or Services shall not exceed the
        amount you paid to us (if any) in the twelve (12) months preceding
        the event giving rise to the liability, or INR 1000 if no such
        payment was made.
      </p>
    ),
  },
  {
    id: "indemnification",
    icon: ShieldAlert,
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify, defend, and hold harmless iNextERP
        Solution, its affiliates, officers, directors, employees, agents,
        suppliers, and licensors from and against any and all claims,
        liabilities, damages, losses, costs, expenses, or fees (including
        reasonable attorneys&apos; fees) arising out of or relating to: (a)
        your use of our Website or Services; (b) Your Content; (c) your
        violation of these Terms; or (d) your violation of any rights of
        another party.
      </p>
    ),
  },
  {
    id: "governing-law-and-dispute-resolution",
    icon: Gavel,
    title: "Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          <strong>Governing Law:</strong> These Terms shall be governed by
          and construed in accordance with the laws of India, without regard
          to its conflict of law principles.
        </p>
        <p>
          <strong>Dispute Resolution:</strong> Any dispute arising out of or
          relating to these Terms or your use of our Website or Services
          shall be subject to the exclusive jurisdiction of the courts
          located in Noida, India.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    icon: XCircle,
    title: "Termination",
    content: (
      <p>
        We may terminate these Terms at any time, with or without cause,
        and with or without notice. Upon termination, your right to access
        and use our Website and Services will immediately cease. All
        provisions of these Terms which by their nature should survive
        termination shall survive termination, including, without
        limitation, ownership provisions, warranty disclaimers, indemnity,
        and limitations of liability.
      </p>
    ),
  },
  {
    id: "entire-agreement",
    icon: FileCheck,
    title: "Entire Agreement",
    content: (
      <p>
        These Terms constitute the entire agreement between you and
        iNextERP Solution regarding your access to and use of our Website
        and Services and supersede all prior or contemporaneous
        communications and proposals, whether oral or written.
      </p>
    ),
  },
  {
    id: "severability",
    icon: Scale,
    title: "Severability",
    content: (
      <p>
        If any provision of these Terms is held to be invalid or
        unenforceable, such provision shall be struck and the remaining
        provisions shall remain in full force and effect.
      </p>
    ),
  },
  {
    id: "waiver",
    icon: Ban,
    title: "Waiver",
    content: (
      <p>
        Our failure to enforce any right or provision of these Terms will
        not be considered a waiver of those rights.
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
          If you have any questions about these Terms, please contact us
          at:{" "}
          <a href="mailto:info@inexterpsolutions.com">
            info@inexterpsolutions.com
          </a>
        </p>
        <p>
          By using our Website and Services, you acknowledge that you have
          read and understood these Terms and agree to be bound by them.
        </p>
      </>
    ),
  },
  {
    id: "india-considerations",
    icon: Landmark,
    title: "Important Considerations for India",
    content: (
      <ul>
        <li>
          <strong>Information Technology Act, 2000:</strong> These Terms
          comply with the provisions of the Information Technology Act,
          2000, and any relevant rules and regulations thereunder.
        </li>
        <li>
          <strong>Consumer Protection Laws:</strong> Our Terms are designed
          to be fair and not misleading to consumers, in accordance with
          Indian consumer protection laws.
        </li>
        <li>
          <strong>Specific Clauses:</strong> Depending on the nature of your
          Services, you may need to include specific clauses related to
          data privacy (though that is typically covered in a separate
          Privacy Policy), service levels, warranties specific to your
          services, and any other terms relevant to your offerings.
        </li>
      </ul>
    ),
  },
];

export default function TermsClient() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Terms"
      title="Terms and Conditions"
      description="The terms that govern your access to and use of the iNextERP Solution website and services."
      lastUpdated="August 10, 2026"
      readTime="10 min read"
      sections={SECTIONS}
      crossLink={{
        label: "Privacy Policy",
        description:
          "Learn how we collect, use, and safeguard your personal information.",
        href: "/privacy-policy",
      }}
    />
  );
}
