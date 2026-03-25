import PanelBase from '../PanelBase/PanelBase';
import WaxSeal from '../../shared/WaxSeal/WaxSeal';
import { LOCATIONS } from '../../../utils/constants';
import styles from './FortressPanel.module.css';

export default function FortressPanel() {
  return (
    <PanelBase locationId={LOCATIONS.FORTRESS} title="⚔ The Fortress — About Me">
      {/* Drawbridge entrance animation */}
      <div className={styles.drawbridge} aria-hidden="true">🏰</div>

      {/* Portrait + identity */}
      <div className={styles.portrait}>
        <div className={styles.avatarWrap}>
          {/* PORTRAIT PLACEHOLDER — replace src with your photo path: /images/taqee-portrait.jpg */}
          <div className={styles.avatarPlaceholder} title="Portrait placeholder — add photo to /public/images/taqee-portrait.jpg">
            🧭
          </div>
          <div className={styles.sealWrap}>
            <WaxSeal label="T" />
          </div>
        </div>
        <div className={styles.info}>
          <h3>Taqee Moore</h3>
          <p>Creative Web Developer · IT Professional</p>
          <p>Detroit, MI (Remote) · EST</p>
          <div className={styles.contact}>
            <span className={styles.contactChip}>📞 313-646-7526</span>
            <span className={styles.contactChip}>✉ 1karvsthecarver@gmail.com</span>
            <span className={styles.contactChip}>🌐 EN · AR</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>The Captain&apos;s Log</h4>
        <p className={styles.bodyText}>
          Creative web developer and IT professional with 4+ years of experience building client-facing digital
          products and navigating remote MSP and help desk environments. I design and ship interactive web experiences
          — from AI-augmented pirate map portfolios to cross-platform mobile apps with Firebase and Stripe — while
          maintaining deep roots in technical support, CRM documentation, and systems administration.
        </p>
        <p className={styles.bodyText}>
          Experienced in Shopify theme development, React Native, GSAP animation, and leveraging AI tools like
          Claude Code to accelerate full-stack delivery. I bring a solutions-first, creative mindset to every
          project — whether that&apos;s building a storefront, automating a workflow, or crafting a UI that makes
          people stop and look twice.
        </p>
      </div>

      {/* Certifications */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Education</h4>
        <p className={styles.bodyText}>⚜ B.S. Software Engineering — Western Governors University (In Progress)</p>
        <p className={styles.bodyText}>⚜ IT Support &amp; Systems Administration — PerScholas</p>
        <p className={styles.bodyText}>⚜ CompTIA A+ Certified</p>
        <p className={styles.bodyText}>⚜ Google IT Support Professional Certificate</p>
      </div>

      {/* Links */}
      <div className={styles.resumeRow}>
        <a
          href="/resume/Taqee_Moore_Resume.pdf"
          download
          className={styles.resumeBtn}
          aria-label="Download resume PDF"
        >
          📜 Download Resume
        </a>
        <a
          href="https://github.com/1KarvsTheCarver"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          aria-label="GitHub profile (opens in new tab)"
        >
          ⚓ GitHub
        </a>
        <a
          href="https://linkedin.com/in/taqee-moore"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          aria-label="LinkedIn profile (opens in new tab)"
        >
          🗺 LinkedIn
        </a>
      </div>
    </PanelBase>
  );
}
