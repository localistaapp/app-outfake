import React, { Component } from 'react';
import GoogleOneTapLogin from 'react-google-one-tap-login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section data-section-id="5" data-share="" data-category="navigations" data-component-id="886f4350_01_awz" className="py-6 bg-white" x-data="{ mobileNavOpen: false }">
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-between px-6 py-3.5 bg-gray-100 border border-gray-100 rounded-full bg-blank">
                  <div className="w-auto">
                     <div className="flex flex-wrap items-center">
                        <div className="w-auto">
                           <a href="/#">
                           <img src="./psassets/logo.png" alt="" data-config-id="img-fe4768-1" className="logo"/>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="w-auto">
                     <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                           <ul className="flex items-center justify-center">
                              <li className="mr-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/#recentIncidents" data-config-id="txt-fe4768-1">Recent Incidents</a></li>
                              <li className="mr-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/#cyberRisks" data-config-id="txt-fe4768-2">Cyber Risks</a></li>
                              <li className="mr-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/#faqs" data-config-id="txt-fe4768-3">FAQs</a></li>
                              <li><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/#" data-config-id="txt-fe4768-4">Risk Checker</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="w-auto">
                     <div className="flex flex-wrap items-center">
                        <div className="w-auto hidden lg:block">
                           <div className="flex flex-wrap -m-2">
                              <div className="w-full md:w-auto p-2"><a className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full" href="/#" data-config-id="txt-fe4768-5">Log In</a></div>
                              <div className="w-full md:w-auto p-2"><a className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full bg-bl" href="/#" data-config-id="txt-fe4768-6">Check your risk</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
            <>{sessionStorage.getItem('user') == null && <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(response) => {console.log(response);}} googleAccountConfigs={{ client_id: '128159303865-64ustcdp4pj9f6isg39p7hekhjdj2ln5.apps.googleusercontent.com',auto_select: false,cancel_on_tap_outside: false }} />}</>
            <div class="container mx-auto px-4 py-6" style={{background: '#f3f4f6'}}>
               <div class="px-8 pt-16 bg-white border border-gray-100 rounded-t-3xl pad-0">
                  <div class="max-w-7xl mx-auto">
                     <div class="flex flex-wrap items-center justify-between -m-4 pb-12 pb-6">
                        <div class="w-full md:w-1/2 p-4 p-0 p-0">
                           <h2 class="font-heading md:text-5xl text-gray-900 font-black tracking-tight text-3xl" data-config-id="text11">Cyber risk check</h2>
                        </div>
                        
                     </div>
                  </div>
               </div>
               <div class="relative px-8">
                  <div class="max-w-7xl mx-auto">
                     <div class="absolute left-0 w-full h-1/2 bg-white border-l border-r border-b border-gray-100 rounded-b-3xl top-0"></div>
                     <div class="relative z-10 flex flex-nowrap -m-4 transition-transform duration-500 ease-in-out" >
                        <div x-ref="slide1" class="flex-shrink-0 max-w-sm w-full p-0">
                           <div class="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md p-4 fheight m-4" contenteditable="false">
                              <div class="flex-initial mb-0 mb-0" style={{display: 'inline-table'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'table-cell', marginTop: '4px'}} height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                              <p style={{paddingLeft: '16px',display: 'table-cell',verticalAlign: 'top'}} class="text-lg text-gray-700">Sign in with your google account to continue...</p>
                              </div>
                              <div class="flex flex-wrap -m-2">
                           <div class="w-full md:w-auto p-2 float-bottom" id="risk-checker-cta"><a class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full" onclick="document.getElementById('risk-checker').style.display='block';document.getElementById('content').style.display='none';document.getElementById('risk-checker').scrollIntoView({ behavior: 'smooth'});" data-config-id="text3">Next (1/3)</a></div>
                        </div>
                           </div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
         </section>
    );
  }
}

export default App;
