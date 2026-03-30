import { Shield, Lock, Download, FileText, Smartphone, Fingerprint, Globe, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-900 font-sans selection:bg-accent-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-brand-900 p-1.5 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">DocuId</span>
          </motion.div>
          <div className="flex items-center gap-6">
            <a href="https://www.docuid.net" target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-brand-500 hover:text-accent-500 transition-colors uppercase tracking-widest flex items-center gap-1.5">
              docuid.net <ExternalLink className="w-3 h-3" />
            </a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download" 
              className="bg-brand-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-accent-600 transition-all"
            >
              Install Add-on
            </motion.a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section - Compact & Direct */}
        <section className="py-16 md:py-24 border-b border-brand-200">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 text-[10px] font-mono font-bold tracking-widest text-accent-600 uppercase bg-accent-50 rounded border border-accent-100">
                v1.0.0 • Windows 11
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
                Biometric Access for <br />
                <span className="text-accent-500">MS Word Documents.</span>
              </h1>
              <p className="text-base text-brand-600 mb-8 leading-relaxed max-w-md">
                Securely access and manage your docuid.net library directly within Microsoft Word. Authenticate instantly using iVALT biometrics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "var(--color-accent-600)" }}
                  whileTap={{ scale: 0.98 }}
                  href="#download" 
                  className="flex items-center justify-center gap-2 bg-brand-900 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-200"
                >
                  <Download className="w-4 h-4" />
                  Download Installer (.exe)
                </motion.a>
              </div>

              {/* Microsoft Store Coming Soon */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-4 bg-white border border-brand-200 rounded-xl max-w-sm"
              >
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8 flex-shrink-0">
                  <div className="bg-[#f25022] w-full h-full"></div>
                  <div className="bg-[#7fbb00] w-full h-full"></div>
                  <div className="bg-[#00a1f1] w-full h-full"></div>
                  <div className="bg-[#ffbb00] w-full h-full"></div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest leading-none mb-1">Microsoft Word Store</p>
                  <p className="text-xs font-bold text-brand-900">Official Add-on Coming Soon</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl border border-brand-200 shadow-xl p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-100">
                  <div className="w-2 h-2 rounded-full bg-brand-200"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-200"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-200"></div>
                  <span className="ml-2 text-[10px] font-mono text-brand-400">DocuId Add-on</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="h-3 bg-brand-50 rounded w-3/4"></div>
                  <div className="h-3 bg-brand-50 rounded w-full"></div>
                  <div className="h-3 bg-brand-50 rounded w-5/6"></div>
                </div>

                <div className="bg-brand-900 rounded-xl p-6 text-center text-white relative overflow-hidden">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-accent-500/5"
                  />
                  <Fingerprint className="w-10 h-10 mx-auto mb-4 text-accent-500 relative z-10" />
                  <p className="text-xs font-mono uppercase tracking-widest mb-2 relative z-10">Awaiting iVALT Auth</p>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative z-10">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-accent-500"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white border border-brand-200 p-3 rounded-lg shadow-lg flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-accent-500" />
                <span className="text-[10px] font-bold uppercase tracking-tight">iVALT Mobile Link</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features - Compact Grid */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-5 h-5 text-accent-500" />,
                  title: "Biometric Auth",
                  desc: "Access docs only after iVALT biometric verification on your phone."
                },
                {
                  icon: <Globe className="w-5 h-5 text-accent-500" />,
                  title: "Cloud Sync",
                  desc: "Direct access to your docuid.net library from the Word sidebar."
                },
                {
                  icon: <FileText className="w-5 h-5 text-accent-500" />,
                  title: "Secure Uploads",
                  desc: "All documents are encrypted and stored securely on DocuId.net."
                }
              ].map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col gap-3 p-4 rounded-xl hover:bg-brand-50/50 transition-colors cursor-default"
                >
                  <div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center border border-brand-100">
                    {f.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider">{f.title}</h3>
                  <p className="text-xs text-brand-500 leading-relaxed font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Compact */}
        <section id="how-it-works" className="py-16 border-t border-brand-200">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-display font-bold mb-10">Getting Started</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { step: "1", text: "Download and install the Windows 11 Add-on." },
                  { step: "2", text: "Login with your docuid.net credentials." },
                  { step: "3", text: "Open MS Word and locate the DocuId sidebar." },
                  { step: "4", text: "Authenticate via iVALT to access your library." }
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-brand-900 text-white text-[10px] font-mono flex items-center justify-center">
                      {s.step}
                    </span>
                    <p className="text-sm font-medium text-brand-700">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-brand-900 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-4">DocuId v1.0</h3>
                  <p className="text-sm text-brand-300 font-light mb-6 leading-relaxed">
                    Our first release focuses on core security. Access your uploaded documents on www.docuid.net securely using this add-on.
                  </p>
                  <div className="flex items-center gap-2 text-accent-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></div>
                    System Ready
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Footer - Compact */}
        <section id="download" className="py-16 bg-white border-t border-brand-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Install DocuId</h2>
            <p className="text-sm text-brand-500 mb-10 max-w-md mx-auto">
              Download the standalone installer for Windows 11. Official Microsoft Word Store version coming soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent-600)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-brand-900 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-brand-100"
              >
                <Download className="w-5 h-5" />
                Download .EXE for Windows 11
              </motion.button>

              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-4 bg-white border border-brand-200 rounded-xl w-full sm:w-auto text-left"
              >
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8 flex-shrink-0">
                  <div className="bg-[#f25022] w-full h-full"></div>
                  <div className="bg-[#7fbb00] w-full h-full"></div>
                  <div className="bg-[#00a1f1] w-full h-full"></div>
                  <div className="bg-[#ffbb00] w-full h-full"></div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest leading-none mb-1">Microsoft Store</p>
                  <p className="text-xs font-bold text-brand-900">Official Add-on Coming Soon</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-brand-200 bg-brand-50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-display font-bold tracking-tight">DocuId</span>
          </div>
          <p className="text-[10px] font-mono font-bold text-brand-400 uppercase tracking-widest">
            © {new Date().getFullYear()} DocuId • Powered by iVALT® Biometrics
          </p>
          <div className="flex gap-6 text-[10px] font-mono font-bold text-brand-500 uppercase tracking-widest">
            <a href="#" className="hover:text-accent-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-500 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}



