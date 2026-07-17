"use client";

import Image from "next/image";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Calculator, 
  FileText, 
  PieChart, 
  RefreshCw, 
  Building2, 
  ShieldCheck, 
  Receipt, 
  Database, 
  Search, 
  LayoutDashboard, 
  CreditCard, 
  Landmark,
  ChevronRight, 
  MonitorPlay, 
  Phone, 
  TrendingUp, 
  BarChart, 
  List, 
  FileSpreadsheet, 
  Wallet,
  CircleDollarSign,
  Check,
  Activity,
  ArrowRightLeft
} from "lucide-react";

// --- WORKFLOW DATA ---
const WORKFLOW_STEPS = [
  { icon: Receipt, title: "Transaction", desc: "Create or import transactions" },
  { icon: Database, title: "Auto-Post", desc: "System posts in ledgers" },
  { icon: RefreshCw, title: "Reconcile", desc: "Match with bank & expenses" },
  { icon: CheckCircle2, title: "Review", desc: "Verify & approve entries" },
  { icon: FileSpreadsheet, title: "Reports", desc: "Real-time financial reports" },
  { icon: PieChart, title: "Insights", desc: "Take smarter business decisions" },
];

const TOUR_TABS = [
  { name: "Dashboard Overview", icon: LayoutDashboard },
  { name: "General Ledger", icon: FileText },
  { name: "Accounts Payable", icon: CreditCard },
  { name: "Accounts Receivable", icon: Wallet },
  { name: "Banking & Reconciliation", icon: Landmark },
  { name: "GST Management", icon: Calculator },
  { name: "Financial Reports", icon: BarChart },
];

export default function AccountingPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-[#FAFAFA] font-sans">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="relative bg-[#060B19] text-white pt-32 pb-40 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Accounting
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
                Accounting<br />
                That's Accurate.<br />
                Insights That <span className="text-[#3b82f6]">Grow.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-md max-w-md leading-relaxed mt-2">
                Manage your finances with precision. Automate accounting workflows, stay compliant, and get real-time insights to make smarter business decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                  Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Take a Product Tour <MonitorPlay className="w-4 h-4" />
                </button>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                {["100% Accurate", "Real-time Insights", "GST Compliant", "Secure & Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image (Cover on Right Side) */}
            <div className="xl:col-span-7 relative w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
               <Image 
                 src="/products/accounting 1.webp" 
                 alt="Accounting Dashboard Cover" 
                 fill 
                 unoptimized
                 className="object-contain drop-shadow-2xl"
                 priority
               />
            </div>
            
          </div>
        </div>
      </section>

      {/* 1.5 FEATURE RIBBON */}
      <div className="bg-white border-b border-gray-100 py-6 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex items-center justify-between gap-8 overflow-x-auto custom-scrollbar pb-2">
            {[
              { icon: FileText, label: "Automated Accounting", desc: "Automate entries, reconciliations and closing", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Calculator, label: "GST Ready", desc: "Stay 100% compliant with latest GST norms", color: "text-green-500", bg: "bg-green-50" },
              { icon: BarChart, label: "Real-time Reports", desc: "Get live insights anytime, anywhere", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Landmark, label: "Bank Reconciliation", desc: "Auto-match transactions in seconds", color: "text-orange-500", bg: "bg-orange-50" },
              { icon: Building2, label: "Multi-Company", desc: "Manage multiple entities with ease", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: ShieldCheck, label: "Audit Trail", desc: "Complete transparency at every step", color: "text-green-600", bg: "bg-green-50" },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0 min-w-[250px]">
                <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center shrink-0`}>
                  <feat.icon className={`w-6 h-6 ${feat.color}`}/>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 mb-0.5">{feat.label}</div>
                  <div className="text-[10px] text-gray-500 leading-tight">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SMART WORKFLOW SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Smart Workflow</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Transaction<br />to Insight.<br /><span className="text-[#3b82f6]">Fully Automated.</span>
              </h2>
              <p className="text-sm text-gray-500 mt-4">Automate your entire accounting process and focus on what really matters.</p>
            </div>
            
            <div className="lg:w-3/4 w-full flex items-center justify-between overflow-x-auto pb-4 custom-scrollbar gap-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center text-center w-28 md:w-32">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 mb-4 transition-transform hover:scale-110 relative">
                      <step.icon className="w-6 h-6 stroke-[1.5] relative z-10 text-gray-700" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{step.title}</div>
                    <div className="text-[10px] text-gray-500 leading-tight px-2">{step.desc}</div>
                  </div>
                  {idx !== WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-blue-200 mx-2 -mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT TOUR (Dashboard & Mobile App Mockups) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            
            {/* Left Tabs (Col 3) */}
            <div className="xl:col-span-3 flex flex-col gap-6">
              <div>
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">Product Tour</div>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                  Experience Accounting<br />Like <span className="text-blue-600">Never Before.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                {TOUR_TABS.map((tab, i) => (
                  <button 
                    key={tab.name} 
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${i === 0 ? 'bg-[#3b82f6] text-white shadow-lg' : 'text-gray-600 hover:bg-white hover:shadow-sm border border-transparent'}`}
                  >
                    <div className="flex items-center gap-3">
                      <tab.icon className={`w-4 h-4 ${i === 0 ? 'text-white' : 'text-gray-400'}`} /> {tab.name}
                    </div>
                    {i === 0 && <ChevronRight className="w-4 h-4 opacity-50" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop UI Center (Col 6) - General Ledger */}
            <div className="xl:col-span-6 bg-[#0F172A] rounded-[2rem] p-6 md:p-8 shadow-2xl border border-gray-800 flex flex-col gap-6 relative overflow-hidden text-white">
               <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                 <h3 className="font-bold text-lg">General Ledger</h3>
                 <div className="flex gap-2">
                   <div className="bg-gray-800 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">All Ledgers <ChevronRight className="w-3 h-3 rotate-90"/></div>
                   <div className="bg-gray-800 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">This Financial Year <ChevronRight className="w-3 h-3 rotate-90"/></div>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <div className="text-[10px] text-gray-400 mb-1">Total Debits</div>
                    <div className="text-lg font-bold">₹ 2,45,85,400</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <div className="text-[10px] text-gray-400 mb-1">Total Credits</div>
                    <div className="text-lg font-bold">₹ 2,45,85,400</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <div className="text-[10px] text-gray-400 mb-1">Closing Balance</div>
                    <div className="text-lg font-bold">₹ 0.00</div>
                  </div>
               </div>

               <div className="flex-1 mt-2">
                 {/* Table Header */}
                 <div className="grid grid-cols-5 text-[10px] font-bold text-gray-400 mb-3 px-2">
                   <div className="col-span-1">Ledger Name</div>
                   <div className="text-right">Opening Balance</div>
                   <div className="text-right">Total Debits</div>
                   <div className="text-right">Total Credits</div>
                   <div className="text-right">Closing Balance</div>
                 </div>
                 {/* Table Rows */}
                 <div className="flex flex-col gap-2">
                   {[
                     { name: "Cash in Hand", op: "₹ 12,45,000", dr: "₹ 45,85,400", cr: "₹ 44,25,300", cl: "₹ 14,05,100" },
                     { name: "HDFC Bank Account", op: "₹ 8,25,300", dr: "₹ 65,42,100", cr: "₹ 60,32,500", cl: "₹ 13,34,900" },
                     { name: "Sundry Debtors", op: "₹ 18,75,000", dr: "₹ 85,62,300", cr: "₹ 78,45,200", cl: "₹ 25,92,100" },
                     { name: "Sundry Creditors", op: "₹ 15,45,000", dr: "₹ 55,24,600", cr: "₹ 60,12,800", cl: "₹ 20,33,200" },
                     { name: "Purchase Account", op: "₹ 0.00", dr: "₹ 1,25,85,600", cr: "₹ 0.00", cl: "₹ 1,25,85,600" },
                   ].map((row, i) => (
                     <div key={i} className="grid grid-cols-5 text-[10px] bg-gray-800/30 p-2 rounded items-center">
                       <div className="col-span-1 text-gray-300">{row.name}</div>
                       <div className="text-right text-gray-400">{row.op}</div>
                       <div className="text-right text-gray-300">{row.dr}</div>
                       <div className="text-right text-gray-300">{row.cr}</div>
                       <div className="text-right font-bold text-gray-200">{row.cl}</div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <button className="w-full text-center text-blue-400 text-xs font-bold mt-2 hover:text-blue-300">View All Ledgers</button>
            </div>

            {/* Mobile UI (Col 3) */}
            <div className="xl:col-span-3 flex justify-center items-center">
              <div className="w-[280px] h-[580px] bg-[#0A0F1C] rounded-[2.5rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden flex flex-col text-white">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex justify-center z-20">
                  <div className="w-24 h-5 bg-gray-900 rounded-b-xl"></div>
                </div>
                
                {/* Mobile Header */}
                <div className="pt-10 pb-4 px-6 flex justify-between items-center border-b border-white/10">
                  <h4 className="font-bold text-sm">Accounting Overview</h4>
                  <Search className="w-4 h-4 text-gray-400" />
                </div>

                {/* Mobile Content */}
                <div className="flex-1 px-5 py-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar pb-20">
                  
                  {/* Select Dropdown */}
                  <div className="text-[10px] text-gray-400">This Year</div>

                  {/* Net Profit Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-[10px] text-gray-400 mb-1">Net Profit</div>
                    <div className="text-2xl font-bold text-white">₹ 56,39,770</div>
                    <div className="text-[8px] font-bold text-green-500 mt-1">↑ 15.6% <span className="font-normal text-gray-500">vs last year</span></div>
                  </div>

                  {/* Income vs Expense Chart */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h5 className="text-[10px] font-bold text-gray-300 mb-4">Income vs Expense</h5>
                    <div className="flex items-end justify-between h-20 gap-2">
                       {/* Abstract bars */}
                       {[ {i:60, e:40}, {i:80, e:50}, {i:40, e:60}, {i:90, e:70}, {i:70, e:40} ].map((val, i) => (
                         <div key={i} className="flex gap-1 items-end w-full">
                           <div className="bg-green-500 w-full rounded-t-sm" style={{height: `${val.i}%`}}></div>
                           <div className="bg-red-500 w-full rounded-t-sm" style={{height: `${val.e}%`}}></div>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Mini Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Cash in Hand</div>
                      <div className="text-sm font-bold text-white">₹ 18,75,540</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[9px] text-gray-400 mb-1">Overdue Receivables</div>
                      <div className="text-sm font-bold text-white">₹ 8,25,000</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. POWERFUL ACCOUNTING FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-8">Powerful Accounting Features</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
             
             {/* Feature 1 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Flexible Chart of Accounts</h3>
               <p className="text-[10px] text-gray-500 mb-auto">Customize chart of accounts as per your business needs.</p>
               <div className="mt-4 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-[10px] text-gray-700 bg-gray-50 p-1.5 rounded"><Wallet className="w-3 h-3 text-blue-500"/> Assets</div>
                 <div className="flex items-center gap-2 text-[10px] text-gray-700 bg-gray-50 p-1.5 rounded"><Receipt className="w-3 h-3 text-red-500"/> Liabilities</div>
                 <div className="flex items-center gap-2 text-[10px] text-gray-700 bg-gray-50 p-1.5 rounded"><TrendingUp className="w-3 h-3 text-green-500"/> Income</div>
                 <div className="flex items-center gap-2 text-[10px] text-gray-700 bg-gray-50 p-1.5 rounded"><CreditCard className="w-3 h-3 text-orange-500"/> Expenses</div>
                 <div className="flex items-center gap-2 text-[10px] text-gray-700 bg-gray-50 p-1.5 rounded"><PieChart className="w-3 h-3 text-purple-500"/> Equity</div>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Voucher Entry</h3>
               <p className="text-[10px] text-gray-500 mb-auto">Create and manage all types of vouchers effortlessly.</p>
               <div className="mt-4 flex flex-col gap-1.5 text-[10px] text-gray-700 w-full">
                 <div className="border-b border-gray-50 pb-1">Payment</div>
                 <div className="border-b border-gray-50 pb-1">Receipt</div>
                 <div className="border-b border-gray-50 pb-1">Journal</div>
                 <div className="border-b border-gray-50 pb-1">Contra</div>
                 <div className="border-b border-gray-50 pb-1">Debit Note</div>
                 <div>Credit Note</div>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Bank Reconciliation</h3>
               <p className="text-[10px] text-gray-500 mb-auto">Auto-reconcile bank statements and save hours of effort.</p>
               <div className="mt-4">
                 <div className="flex justify-between items-center mb-4 bg-green-50 p-2 rounded-lg border border-green-100">
                   <div>
                     <div className="text-[9px] text-gray-500">Matched</div>
                     <div className="font-bold text-gray-900 text-xs">1,250</div>
                   </div>
                   <CheckCircle2 className="w-4 h-4 text-green-500" />
                 </div>
                 <div className="flex justify-between items-center mb-4">
                   <div className="text-[9px] text-gray-500">Unmatched</div>
                   <div className="font-bold text-gray-900 text-xs">25</div>
                 </div>
                 <div className="pt-2 border-t border-gray-100">
                   <div className="text-[9px] text-gray-400">Amount Matched</div>
                   <div className="font-bold text-gray-900 text-sm">₹ 2,45,85,000</div>
                 </div>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">GST Management</h3>
               <p className="text-[10px] text-gray-500 mb-auto">File returns, generate reports and stay compliant.</p>
               <div className="mt-4 flex flex-col gap-3 text-[10px]">
                 <div className="flex justify-between items-center"><span className="text-gray-700">GSTR-1</span><span className="text-green-500 font-bold">Filed</span></div>
                 <div className="flex justify-between items-center"><span className="text-gray-700">GSTR-3B</span><span className="text-green-500 font-bold">Filed</span></div>
                 <div className="flex justify-between items-center"><span className="text-gray-700">GSTR-9</span><span className="text-blue-500 font-bold">Pending</span></div>
                 <button className="w-full mt-2 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">File Return</button>
               </div>
             </div>

             {/* Feature 5 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">TDS Management</h3>
               <p className="text-[10px] text-gray-500 mb-auto">Track TDS, generate certificates and file on time.</p>
               <div className="mt-4 flex flex-col gap-4 text-[10px] text-gray-600 w-full">
                 <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                   <span className="text-gray-500">TDS Payable</span><span className="font-bold text-gray-900">₹ 1,25,000</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                   <span className="text-gray-500">TDS Paid</span><span className="font-bold text-gray-900">₹ 95,000</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-gray-500">TDS Balance</span><span className="font-bold text-gray-900">₹ 30,000</span>
                 </div>
               </div>
             </div>

             {/* Feature 6 */}
             <div className="xl:col-span-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm flex flex-col h-[280px]">
               <h3 className="font-bold text-gray-900 text-sm mb-2">Fixed Assets</h3>
               <p className="text-[10px] text-gray-500 mb-auto">Track assets, depreciation and asset lifecycle.</p>
               <div className="mt-4 flex justify-between items-end">
                 <div className="flex flex-col gap-3">
                   <div>
                     <div className="text-[9px] text-gray-400">Total Assets</div>
                     <div className="text-xs font-bold text-gray-900">125</div>
                   </div>
                   <div>
                     <div className="text-[9px] text-gray-400">Depreciation</div>
                     <div className="text-xs font-bold text-gray-900">₹ 8,45,000</div>
                   </div>
                   <div>
                     <div className="text-[9px] text-gray-400">Net Block</div>
                     <div className="text-xs font-bold text-gray-900">₹ 46,25,000</div>
                   </div>
                 </div>
                 {/* Mini Donut */}
                 <div className="w-12 h-12 rounded-full border-[4px] border-blue-500 border-r-green-500 mb-2"></div>
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* 5. BEFORE VS AFTER SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-12">
             <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Before iNextERP vs After</div>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col xl:flex-row border border-gray-100">
            
            {/* Before Side (Dark) */}
            <div className="flex-1 bg-[#1A1D24] text-white relative flex items-center">
               <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" alt="Stressed Accountant" fill className="object-cover" unoptimized />
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D24] via-[#1A1D24]/80 to-transparent" />
               <div className="relative z-10 p-10 md:p-16">
                 <div className="inline-block bg-gray-800 text-gray-300 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-gray-700">Before NextERP</div>
                 <ul className="space-y-5">
                   {["Manual entries & human errors", "Delayed reports & closing", "Difficult bank reconciliation", "Compliance & filing issues", "No real-time visibility", "Limited data for decisions"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-sm text-gray-300 font-medium">
                       <div className="bg-red-500/20 p-1 rounded-full"><XCircle className="w-4 h-4 text-red-500 shrink-0" /></div> {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Slider Button Placeholder */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center z-20 hidden xl:flex cursor-ew-resize">
              <ArrowRightLeft className="w-6 h-6 text-blue-600" />
            </div>

            {/* After Side (Light) */}
            <div className="flex-1 bg-white relative flex items-center overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Happy Accountant" fill className="object-cover" unoptimized />
               </div>
               <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 w-full">
                 <div className="flex-1">
                   <div className="inline-block bg-green-50 text-green-600 font-bold text-xs px-4 py-2 rounded-full mb-8 border border-green-200">After NextERP</div>
                   <ul className="space-y-5">
                     {["100% accurate & automated", "Real-time reports & dashboards", "Auto bank reconciliation", "Always compliant, always ready", "Real-time business insights", "Smarter & faster decisions"].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-sm text-gray-700 font-bold">
                         <div className="bg-green-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /></div> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Right Stat Floating Cards */}
                 <div className="flex flex-col justify-center gap-4 shrink-0">
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-5 w-48 relative overflow-hidden">
                      <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Net Profit</div>
                      <div className="text-xl font-bold text-gray-900">₹ 56,39,770</div>
                      <div className="text-[10px] font-bold text-green-500 mt-1">↑ 15.6%</div>
                      <div className="mt-3">
                        <svg className="w-full h-8 text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,80 20,60 40,70 60,30 80,40 100,10" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-5 w-48">
                      <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Cash in Hand</div>
                      <div className="text-xl font-bold text-gray-900">₹ 18,75,540</div>
                      <div className="text-[10px] font-bold text-green-500 mt-1">↑ 9.1%</div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION (Dark) */}
      <section className="relative bg-[#060B19] py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#060B19]/0 to-transparent pointer-events-none" />

        {/* Abstract Laptop / Dashboard Graphics */}
        <div className="absolute right-0 bottom-0 w-[600px] h-full hidden lg:block opacity-90 pointer-events-none z-0">
           {/* Laptop Base */}
           <div className="absolute bottom-12 right-20 w-[400px] h-4 bg-gray-800 rounded-b-xl border-b-4 border-gray-900 shadow-2xl"></div>
           {/* Laptop Screen */}
           <div className="absolute bottom-16 right-24 w-[360px] h-[220px] bg-[#0A0F1C] border-4 border-gray-800 rounded-t-xl shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
             {/* Simulated Screen Content */}
             <div className="p-4 grid grid-cols-2 gap-3 opacity-60">
                <div className="h-10 bg-blue-900/40 rounded"></div>
                <div className="h-10 bg-green-900/40 rounded"></div>
                <div className="col-span-2 h-20 bg-gray-800/50 rounded flex items-end p-2 gap-1">
                  <div className="w-full h-[30%] bg-blue-500 rounded-t-sm"></div>
                  <div className="w-full h-[60%] bg-blue-500 rounded-t-sm"></div>
                  <div className="w-full h-[40%] bg-blue-500 rounded-t-sm"></div>
                  <div className="w-full h-[80%] bg-blue-500 rounded-t-sm"></div>
                </div>
             </div>
           </div>
           
           {/* Floating Icons */}
           <div className="absolute bottom-48 right-10 w-12 h-12 bg-blue-600 rounded-lg shadow-[0_0_30px_#3b82f6] flex items-center justify-center transform rotate-12 z-20">
             <BarChart className="w-6 h-6 text-white" />
           </div>
           <div className="absolute bottom-24 right-96 w-10 h-10 bg-[#0F172A] border border-blue-500/30 rounded-lg shadow-xl flex items-center justify-center transform -rotate-12 z-20">
             <Landmark className="w-5 h-5 text-blue-400" />
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Take Control of Your Finances.<br />Drive Profits. Always.
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Join 500+ businesses that trust NextERP Accounting to manage their finances with confidence.
              </p>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row justify-center lg:justify-end gap-4 z-20">
               <button className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2">
                 Book an Enterprise Demo <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-8 py-4 bg-transparent text-gray-300 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
                 Talk to Our Expert <Phone className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
