import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import LoginSignupPage from '/src/LoginSignupPage';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16 pb-12">
          <Routes>
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/view-pdf" element={<ViewPDF />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-14" src="/images/cronos-logo-favicon.png" alt="cronos-logo"></img>
            </Link>
            <Link to="/" className="font-bold text-xl text-blue-800">Cronos</Link>
          </div>
          <div className="flex">
            {}
            <div className="sm:ml-6 flex sm:space-x-8">
              <Link to="/" className={`${isActive('/') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Home
              </Link>
              <Link to="/dashboard" className={`${isActive('/dashboard') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Dashboard
              </Link>
              <Link to="/upload" className={`${isActive('/upload') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Upload
              </Link>
              <Link to="/about" className={`${isActive('/about') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                About Us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 TermSheetAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Home Page
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Term Sheet Validation with AI</span>
            <span className="block text-blue-600">by Cronos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Automate the validation of term sheets with advanced AI technology. Save time, reduce errors, and ensure legal compliance for your investments.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link to="/upload" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Intelligent Term Sheet Analysis
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our AI-powered platform streamlines the validation process for venture capital and investment term sheets.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Automated Validation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our AI automatically validates term sheets against industry standards and legal requirements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Clause Comparison</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Compare clauses against market standards to identify non-standard terms and potential risks.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Instant Analysis</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get immediate feedback on your term sheets with highlighted issues and suggested improvements.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Secure Processing</h3>
                  <p className="mt-2 text-base text-gray-500">
                    All documents are processed securely with enterprise-grade encryption and privacy controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl text-blue-600 font-semibold tracking-wide uppercase">Problem Statement</h2>
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Challenge in Term Sheet Validation
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-blue prose-lg text-gray-500 mx-auto text-center">
              <p>
                Term sheets are critical documents in investment and financing transactions, but their validation is often:
              </p>
              <ul>
                <li>Time-consuming and manual, requiring hours of legal expertise</li>
                <li>Error-prone due to complex legal language and structures</li>
                <li>Expensive, with high costs for legal review</li>
                <li>Inconsistent across different reviewers and firms</li>
              </ul>
              <p>
                Our AI-powered solution addresses these challenges by automating the validation process, comparing against industry standards, identifying potential issues, and providing recommendations—all within minutes instead of days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard Page
function Dashboard() {
  const recentUploads = [
    { id: 1, name: "Series A Term Sheet - TechStartup Inc.", date: "March 29, 2025", status: "Validated", score: 92 },
    { id: 2, name: "Seed Round Term Sheet - HealthAI Solutions", date: "March 25, 2025", status: "Issues Found", score: 78 },
    { id: 3, name: "Series B Term Sheet - GreenEnergy Corp", date: "March 20, 2025", status: "Validated", score: 95 },
    { id: 4, name: "Convertible Note - FinTech Platform", date: "March 15, 2025", status: "Critical Issues", score: 65 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            User Dashboard
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link to="/upload">
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Upload New Document
            </button>
          </Link>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Documents
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        12
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Validated Documents
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        8
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Issues Detected
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        4
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Uploads</h3>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Document Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Upload Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Validation Score
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentUploads.map((upload) => (
                      <tr key={upload.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{upload.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{upload.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            upload.status === 'Validated' 
                              ? 'bg-green-100 text-green-800' 
                              : upload.status === 'Issues Found' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {upload.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {upload.score}/100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to="/view-pdf" className="text-blue-600 hover:text-blue-900">
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Upload Page
function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Upload Term Sheet
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Upload your term sheet PDF document for AI validation and analysis.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div 
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF up to 10MB
                </p>
              </div>
            </div>
            
            {selectedFile && (
              <div className="mt-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <svg className="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {selectedFile.name}
          </div>
          <div className="text-sm text-gray-500">
            {Math.round(selectedFile.size / 1024)} KB
          </div>
        </div>
      </div>
    </div>
  </div>
)}

            
            <div className="mt-6">
              <Link to="/view-pdf">
                <button
                  type="button"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    selectedFile 
                      ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!selectedFile}
                >
                  Upload and Validate
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Upload Guidelines</h3>
          <div className="mt-2 text-sm text-gray-500">
            <ul className="list-disc pl-5 space-y-1">
              <li>Files should be in PDF format and less than 10MB in size</li>
              <li>Term sheets should be clearly formatted with standard clauses</li>
              <li>For best results, use clearly scanned documents or digital PDFs</li>
              <li>Ensure your document contains all relevant investment terms</li>
              <li>Our system supports most common term sheet formats used in venture capital, private equity, and startup financing</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-blue-700">
                All uploaded documents are processed securely with enterprise-grade encryption. Your data is never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// View PDF Page
function ViewPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showAnalysis, setShowAnalysis] = useState(true);
  
  const PDF_URL = "/sample.pdf";
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Use the function in the Document component
  <Document
    file={PDF_URL}
    onLoadSuccess={onDocumentLoadSuccess}
  >
    <Page pageNumber={pageNumber} />
  </Document>

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1);
    }
  }

  function nextPage() {
    if (pageNumber < numPages) {
      changePage(1);
    }
  }

  // Simulated validation issues
  const validationResults = [
    { 
      type: "Critical", 
      clause: "Liquidation Preference", 
      issue: "Non-standard multiple (3x) could deter investors", 
      recommendation: "Consider reducing to standard 1x-2x preference" 
    },
    { 
      type: "Warning", 
      clause: "Anti-dilution Protection", 
      issue: "Full-ratchet provision is unusually aggressive", 
      recommendation: "Consider weighted average anti-dilution instead" 
    },
    { 
      type: "Information", 
      clause: "Vesting Schedule", 
      issue: "Standard 4-year vesting with 1-year cliff", 
      recommendation: "No changes needed, this is market standard" 
    },
    { 
      type: "Warning", 
      clause: "Board Composition", 
      issue: "Investor control disproportionate to ownership percentage", 
      recommendation: "Consider more balanced board structure" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Term Sheet Analysis
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Series A Term Sheet - TechStartup Inc.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => window.print()}
          >
            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setShowAnalysis(!showAnalysis)}
          >
            {showAnalysis ? "Hide Analysis" : "Show Analysis"}
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* PDF Viewer */}
        <div className={`lg:col-span-${showAnalysis ? '2' : '3'} bg-white shadow overflow-hidden sm:rounded-lg`}>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                Page {pageNumber} of {numPages || '--'}
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>
                <button
                  className="px-2 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
                  onClick={nextPage}
                  disabled={numPages === null || pageNumber >= numPages}
                >
                  Next
                </button>
              </div>
            </div>
            
            <div className="border rounded-md p-2 bg-gray-100 flex justify-center min-h-screen">
              {/* Placeholder for the PDF viewer */}
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">PDF document would be displayed here</p>
                  <p className="text-xs text-gray-400">In a production environment, the actual PDF would be rendered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Panel */}
        {showAnalysis && (
          <div className="lg:col-span-1 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                AI Analysis Results
              </h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-blue-600">85</div>
                  <div className="ml-2 text-sm text-gray-500">/ 100 Score</div>
                </div>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Issues Detected</h4>
                <div className="mt-2 space-y-4">
                  {validationResults.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-start">
                        <div>
                          <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${
                            result.type === 'Critical' 
                              ? 'bg-red-100' 
                              : result.type === 'Warning' 
                                ? 'bg-yellow-100' 
                                : 'bg-green-100'
                          }`}>
                            {result.type === 'Critical' && (
                              <svg className="h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            )}
                            {result.type === 'Warning' && (
                              <svg className="h-4 w-4 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            )}
                            {result.type === 'Information' && (
                              <svg className="h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </span>
                        </div>
                        <div className="ml-3">
                          <h5 className="text-sm font-medium text-gray-900">{result.clause}</h5>
                          <p className="mt-1 text-sm text-gray-500">{result.issue}</p>
                          <p className="mt-1 text-sm font-medium text-blue-600">{result.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Overall Assessment</h4>
                <p className="mt-2 text-sm text-gray-500">
                  This term sheet contains several non-standard provisions that may be challenging for investors. While the overall structure is sound, we recommend addressing the critical and warning issues highlighted above to improve investor receptivity and align with market standards.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// About Us Page
function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About Us</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Our Mission
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Simplifying term sheet validation with artificial intelligence
        </p>
      </div>

      <div className="mt-20">
        <div className="lg:text-center">
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Problem We're Solving
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Term sheets are critical documents in investment transactions, but their validation is often time-consuming, error-prone, and expensive.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">Time-Consuming</h3>
                <p className="mt-2 text-base text-gray-500">
                  Legal professionals spend hours manually reviewing term sheets, checking for compliance with standards and identifying potential issues.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">Error-Prone</h3>
                <p className="mt-2 text-base text-gray-500">
                  Human review inevitably leads to inconsistencies and missed details, especially when dealing with complex legal language.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">Expensive</h3>
                <p className="mt-2 text-base text-gray-500">
                  Legal review of term sheets comes with high costs, making it especially challenging for early-stage startups with limited resources.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">Inconsistent</h3>
                <p className="mt-2 text-base text-gray-500">
                  Different legal professionals may have varying interpretations of what constitutes standard terms, leading to inconsistent validation results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="lg:text-center">
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Solution
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            TermSheetAI brings artificial intelligence to term sheet validation, making it faster, more accurate, and more accessible.
          </p>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              How It Works
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Our AI-powered platform streamlines the term sheet validation process.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Step 1
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Upload your term sheet in PDF format through our secure platform.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Step 2
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Our AI processes the document, extracting key clauses and terms using advanced natural language processing.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Step 3
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The system compares each clause against industry standards and identifies potential issues or non-standard terms.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Step 4
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  You receive a detailed analysis with highlighted issues, recommendations, and an overall validation score.
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Step 5
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Use our insights to negotiate better terms, avoid potential pitfalls, and finalize your investment agreements with confidence.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-12">
        <div className="lg:text-center">
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A team of legal experts, data scientists, and AI specialists working together to simplify term sheet validation.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/320" alt="Team member" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">Shantam Ranjan</p>
                <p className="mt-1 text-base text-gray-500">Tech Lead</p>
                <p className="mt-3 text-base text-gray-500">
                Leading the machine learning efforts in our project, bringing expertise in data modeling, algorithm development, and AI-driven solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-fit w-fit object-cover" src="/images/Photo.png" alt="Team member" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">Akul Tyagi</p>
                <p className="mt-1 text-base text-gray-500">FrontEnd Developer</p>
                <p className="mt-3 text-base text-gray-500">
                Our Frontend Developer, ensuring our application is visually appealing, responsive, and highly interactive.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/320" alt="Team member" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">Harshit Tandon</p>
                <p className="mt-1 text-base text-gray-500">FrontEnd Developer</p>
                <p className="mt-3 text-base text-gray-500">
                Our Frontend Developer, who brings a keen eye for design and seamless user experiences to our project.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="/api/placeholder/400/320" alt="Team member" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">Krishna Singh</p>
                <p className="mt-1 text-base text-gray-500">BackEnd Developer</p>
                <p className="mt-3 text-base text-gray-500">
                Our expert in Backend Development, building robust architectures and seamless integrations to power our application efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;