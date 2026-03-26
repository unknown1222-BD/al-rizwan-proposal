import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, EffectFade } from 'swiper/modules';
import gsap from 'gsap';
import { 
  Cpu, 
  AlertTriangle, 
  Globe, 
  Search, 
  ShieldCheck, 
  Crown, 
  Table, 
  Rocket, 
  Workflow,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './index.css';

const Presentation: React.FC = () => {
  useEffect(() => {
    // Initial GSAP animations for text reveal
    gsap.from('.reveal-text h1', {
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  const onSlideChange = () => {
    // Reset or replay animations on slide change if needed
    gsap.from('.swiper-slide-active .reveal-content', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
    });
  };

  return (
    <div className="presentation-container">
      {/* PERSISTENT WATERMARK */}
      <img src="/images/watermark.png" className="watermark" alt="Kamran Nawaz" />

      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, Keyboard, EffectFade]}
        effect="fade"
        speed={1000}
        onSlideChange={onSlideChange}
      >
        {/* Slide 1: Title (Hook) */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/image_0.png" className="hero-bg" alt="CNC and AI Nodes" />
            <div className="gradient-overlay"></div>
            <div className="glass-card reveal-content">
              <Cpu className="highlight" size={48} style={{ marginBottom: '1.5rem' }} />
              <h1>AL RIZWAN CNC: <span className="highlight">YOUR DIGITAL STUDIO’S NEXT EVOLUTION.</span></h1>
              <p style={{ marginTop: '1rem', color: 'var(--text-dim)', letterSpacing: '4px' }}>AN AI-POWERED BUSINESS ENGINE PROPOSAL.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: The Vision */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content" style={{ maxWidth: '1000px' }}>
              <div className="split-screen">
              <div className="split-left">
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
                  <img src="/images/jali_2d.png" alt="2D Jali Vector" style={{ width: '400px', height: '400px', objectFit: 'contain' }} />
                  <p style={{ textAlign: 'center', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>2D Jali Vector</p>
                </div>
              </div>
              <div className="split-line"></div>
              <div className="split-right">
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid var(--primary)', boxShadow: '0 0 30px rgba(0,242,255,0.15)' }}>
                  <img src="/images/jali_3d.png" alt="3D Relief Render" style={{ width: '400px', height: '400px', objectFit: 'contain' }} />
                  <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>3D Relief Render</p>
                </div>
              </div>
            </div>
            </div> {/* Closing glass-card here */}
            <div className="glass-card reveal-content" style={{ marginTop: '2rem', maxWidth: '600px' }}>
              <h2>Empowering Your <span className="highlight">HITL</span> (Human-in-the-Loop) Workflow.</h2>
              <p style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
                Our AI doesn’t replace your expertise; it <span className="highlight">automates the bottleneck</span> (client communication & file management) so your designers can focus 100% on Creating & Programming.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: The Pain Points */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content">
              <h1>Manual Workflow is <span style={{ color: '#ff4d4d' }}>Killing Growth</span>.</h1>
              <div className="pain-points-grid">
                <div className="pain-item">
                  <Clock size={24} style={{ marginBottom: '1rem', color: '#ff4d4d' }} />
                  <h3>Slow Response</h3>
                  <p>24/7 client response time is slow and taxing for humans.</p>
                </div>
                <div className="pain-item">
                  <Workflow size={24} style={{ marginBottom: '1rem', color: '#ff4d4d' }} />
                  <h3>Unstructured</h3>
                  <p>Missing machine specs (Laser/Router) often cause delays.</p>
                </div>
                <div className="pain-item">
                  <AlertTriangle size={24} style={{ marginBottom: '1rem', color: '#ff4d4d' }} />
                  <h3>Revision Chaos</h3>
                  <p>Design revisions are fragmented and hard to track across WhatsApp.</p>
                </div>
                <div className="pain-item">
                  <ShieldCheck size={24} style={{ marginBottom: '1rem', color: '#ff4d4d' }} />
                  <h3>IP Risk</h3>
                  <p>Securing your digital drawings (STL/DXF) before payment is risky.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4: The Solution */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/image_1.png" className="hero-bg" alt="AI Ecosystem" />
            <div className="gradient-overlay"></div>
            <div className="glass-card reveal-content">
              <h1>Your <span className="highlight">Bespoke AI Ecosystem</span>.</h1>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="highlight">A. AI WhatsApp Assistant</h3>
                  <p>Cloned Voice (Al Rizwan's Voice), Multilingual Support, Intent Detection.</p>
                </div>
                <div>
                  <h3 className="highlight">B. Private Admin Dashboard</h3>
                  <p>Order Tracking (HITL control), Secure File Release, Revision Management.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Features - Client Experience */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Globe className="highlight" size={32} />
                <h1 style={{ margin: 0 }}>Global Client Experience</h1>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="highlight">Multilingual Cloned Voice AI</h3>
                  <p>Instant voice replies in Arabic, English, Urdu/Punjabi using your cloned voice (ElevenLabs). Ideal for international clients (UAE, Saudi, Qatar).</p>
                </div>
                <div>
                  <h3 className="highlight">Pre-Design Technical Collector</h3>
                  <p>Bot automatically asks for machine specs (Laser/Router, Working Area, Bit type) before designers start.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6: Features - Sales & Showcasing */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Search className="highlight" size={32} />
                <h1 style={{ margin: 0 }}>Sales & Showcasing</h1>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="highlight">Dynamic Portfolio (Gemini Embeddings)</h3>
                  <p>User sends an image; AI analyzes it and fetches the exact matching design style from your portfolio (Vector DB search).</p>
                </div>
                <div>
                  <h3 className="highlight">Custom Order Form Routing</h3>
                  <p>Inquiries are routed directly to your detailed website form for structured lead generation.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 7: Features - Secure Operations */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <ShieldCheck className="highlight" size={32} />
                <h1 style={{ margin: 0 }}>Secure Operations</h1>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="highlight">Secure Preview & Approval</h3>
                  <p>Automatically sends watermarked renders. Confirms approval and payment before releasing the actual file.</p>
                </div>
                <div>
                  <h3 className="highlight">Automated Delivery & Revisions</h3>
                  <p>Instantly sends final files (STL/DXF). Manages revision requests neatly within the dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 8: Features - Admin Power */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/image_2.png" className="hero-bg" alt="Admin Boss Mode" />
            <div className="gradient-overlay"></div>
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Crown className="highlight" size={32} />
                <h1 style={{ margin: 0 }}>Admin Power</h1>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="highlight">Admin "Boss Mode"</h3>
                  <p>Use WhatsApp voice commands (Al Rizwan's Voice) to query your database for daily pending orders & new leads summary.</p>
                </div>
                <div>
                  <h3 className="highlight">Smart Festival Broadcasts</h3>
                  <p>Safely send personalized greetings and new catalogs (Baileys engine scheduler).</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 9: Investment Breakdown */}
        <SwiperSlide>
          <div className="slide" style={{ padding: '2rem' }}>
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Table className="highlight" size={32} />
                <h1 style={{ margin: 0 }}>Investment Breakdown</h1>
              </div>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Complexity</th>
                    <th>Price (PKR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI WhatsApp Voice Assistant', 'High', '35,000'],
                    ['ElevenLabs Voice Cloning', 'Medium', '20,000'],
                    ['Multilingual Intent Engine', 'High', '30,000'],
                    ['HITL Admin Dashboard', 'High', '45,000'],
                    ['Secure DXF/STL File Vault', 'Medium', '25,000'],
                    ['Gemini Portfolio Search', 'High', '30,000'],
                    ['Pre-Design Tech Collector', 'Medium', '15,000'],
                    ['Watermarking System', 'Low', '10,000'],
                    ['Automated Order Routing', 'Medium', '20,000'],
                    ['Boss Mode Voice Queries', 'Medium', '20,000'],
                    ['Baileys Broadcast Engine', 'Medium', '15,000'],
                    ['Maintenance & Support (1yr)', 'Low', '10,000'],
                  ].map(([feature, complexity, price], index) => (
                    <tr key={index}>
                      <td>{feature}</td>
                      <td>{complexity}</td>
                      <td className="highlight">{price}</td>
                    </tr>
                  ))}
                  <tr style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                    <td colSpan={2}>TOTAL PROJECT VALUE</td>
                    <td className="highlight">275,000 PKR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 10: Pricing Models */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/image_3.png" className="hero-bg" alt="Pricing Choice" />
            <div className="gradient-overlay"></div>
            <div className="glass-card reveal-content" style={{ maxWidth: '1000px' }}>
              <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choosing Your <span className="highlight">Path</span></h1>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div style={{ borderRight: '1px solid var(--glass-border)', paddingRight: '1.5rem' }}>
                  <h3 className="secondary-highlight">OPTION A: Independent Build</h3>
                  <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>275,000 <span style={{ fontSize: '1rem' }}>PKR</span></h2>
                  <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: '1rem' }}>• Client manages own Cloud (GCP) bills.</li>
                    <li style={{ marginBottom: '1rem' }}>• Direct API billing (ElevenLabs/OpenAI).</li>
                    <li style={{ marginBottom: '1rem' }}>• Variable Monthly Operational Costs.</li>
                    <li style={{ marginBottom: '1rem' }}>• Maintenance is charged per request.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="highlight">OPTION B: SaaS Partner (Recommended)</h3>
                  <h2 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>150,000 <span style={{ fontSize: '1rem' }}>PKR</span></h2>
                  <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '1rem' }}>45% FLAT DISCOUNT</p>
                  <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    <li style={{ marginBottom: '1rem' }}>• You pay bills until SaaS transition.</li>
                    <li style={{ marginBottom: '1rem' }}>• Predictable fixed monthly subscription.</li>
                    <li style={{ marginBottom: '1rem' }}>• Hosting, Voice AI, & Support Included.</li>
                    <li style={{ marginBottom: '1rem' }}>• Continuous Feature Updates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 11: SaaS Transition */}
        <SwiperSlide>
          <div className="slide">
            <div className="code-bg">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i}>
                  {'await mcp.execute("check_security", { tenant: "al_rizwan_cnc", version: "4.0.1" });'.repeat(2)}
                  {'// Testing automated STL release protocols for production environment...'.repeat(1)}
                  {`const mcpStoreIntegration = true; load_tools("elevenlabs", "baileys", "gemini-embeddings");`}
                </div>
              ))}
            </div>
            <div className="glass-card reveal-content">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Zap className="highlight" size={32} />
                <h1>SaaS Transition Roadmap</h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--primary)' }}>90%</div>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Final MCP Testing Phase</p>
                </div>
                <div style={{ flex: 2, paddingLeft: '2rem', borderLeft: '1px solid var(--primary)' }}>
                  <p style={{ lineHeight: '1.6' }}>
                    Our platform is under final MCP testing for maximum security and MCP Store integration.
                  </p>
                  <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                    Initial Setup: During Option B custom phase, hosting/API bills must be paid directly. Once on SaaS, you transition to the all-inclusive model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 12: Next Steps */}
        <SwiperSlide>
          <div className="slide">
            <div className="glass-card reveal-content" style={{ textAlign: 'center' }}>
              <Rocket className="highlight" size={64} style={{ marginBottom: '2rem', margin: '1.5rem auto' }} />
              <h1>Secure Your Studio's <span className="highlight">Digital Future</span>.</h1>
              <div style={{ marginTop: '3rem', textAlign: 'left', display: 'inline-block', maxWidth: '500px' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <CheckCircle2 color="var(--primary)" size={24} />
                  <span style={{ fontSize: '1.1rem' }}>Select Your AI Strategy (Option A or Option B).</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <CheckCircle2 color="var(--primary)" size={24} />
                  <span style={{ fontSize: '1.1rem' }}>Setup Your Secure IP Vault & Voice Training Lab.</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <CheckCircle2 color="var(--primary)" size={24} />
                  <span style={{ fontSize: '1.1rem' }}>Automate Sales for Saudi, UAE & Qatar Markets.</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--primary)" size={24} />
                  <span style={{ fontSize: '1.1rem' }}>Initiate the Al Rizwan AI-First Evolution.</span>
                </div>
              </div>
              <div style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '2px', opacity: 0.8 }}>
                KAMRAN NAWAZ | STRATEGIC AI ARCHITECT
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Presentation;
