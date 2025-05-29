import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Github, Star, Search, ShieldCheck, AlertTriangle, FileText, Cpu, Code } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#171717] backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#top" className="flex items-center gap-2">
              <img src="/rmapp-site/images/ascii-logo.png" alt="rmapp ascii art logo" className="h-8 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#installation" className="text-slate-300 hover:text-white transition-colors">
              Installation
            </a>
            <a href="#usage" className="text-slate-300 hover:text-white transition-colors">
              Usage
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-slate-600 hover:bg-[rgb(46,108,192)]" asChild>
              <a href="https://github.com/alewtschuk/rmapp" target="_blank" rel="noopener noreferrer" className="text-[#171717]">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <img src="/rmapp-site/images/ascii-logo.png" alt="rmapp ascii art logo" className="w-full h-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Rm for your apps. No more drag to trash. No more artifacts. All in the command line. GUIs are for normies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[rgb(56,128,232)] hover:bg-[rgb(46,108,192)] text-white" asChild>
                <a href="#installation"> 
                  <Download className="h-5 w-5 mr-2" />
                  Install Now on MacOS
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-[rgb(46,108,192)]" asChild>
                <a href="https://github.com/alewtschuk/rmapp" target="_blank" rel="noopener noreferrer" className="text-[#171717]">
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Search className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">Multi-Directory Scanning</CardTitle>
                <CardDescription className="text-slate-300">
                  Scans all application data directories in parallel. Finds all associated artifacts through your file
                  system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">Safe File Handling</CardTitle>
                <CardDescription className="text-slate-300">
                  Built with safe deletion in mind. Sends files to trash by default. Unless youre feeling dangerous.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">Unsafe File Handling</CardTitle>
                <CardDescription className="text-slate-300">
                  Allows for complete unsafe deletion via --force
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <FileText className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">File Size Checking</CardTitle>
                <CardDescription className="text-slate-300">
                  Preview the size of and the discovered files via --peek
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Cpu className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">Native Support</CardTitle>
                <CardDescription className="text-slate-300">
                  Built natively in Go for MacOS with Objective-C interop
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Code className="h-8 w-8 text-[rgb(56,128,232)] mb-2" />
                <CardTitle className="text-white">SIP Compatible</CardTitle>
                <CardDescription className="text-slate-300">
                  Works with MacOS System Integrity Protection to safely remove protected files with user approval
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Installation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Homebrew</CardTitle>
                  <CardDescription className="text-slate-300">Install on macOS using Homebrew</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded p-4 font-mono text-sm">
                    <div className="text-green-400">brew tap alewtschuk/formulae</div>
                    <div className="text-green-400">brew install rmapp</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Go</CardTitle>
                  <CardDescription className="text-slate-300">Install from source using go</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded p-4 font-mono text-sm">
                    <div className="text-green-400">git clone https://github.com/alewtschuk/rmapp.git</div>
                    <div className="text-green-400">cd rmapp</div>
                    <div className="text-green-400">go install</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Verify Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black rounded p-4 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ rmapp --version</div>
                  <div className="text-slate-300">rmapp version: 1.0</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Usage Examples</h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Help Demo */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Get Help</CardTitle>
                <CardDescription className="text-slate-300">
                  View all available commands and options with detailed descriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-slate-600">
                  <img
                    src="/rmapp-site/images/help-demo.png"
                    alt="Terminal demonstration of rmapp --help showing all available commands"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 bg-black rounded p-4 font-mono text-sm space-y-1">
                  <div>
                    <span className="text-green-400">$ rmapp -h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Peek Demo */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Preview Files with --peek</CardTitle>
                <CardDescription className="text-slate-300">
                  See what files will be affected and their total size before making any changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-slate-600">
                  <img
                    src="/rmapp-site/images/peek-demo.png"
                    alt="Terminal demonstration of rmapp --peek showing file discovery and sizes"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 bg-black rounded p-4 font-mono text-sm">
                  <span className="text-green-400">$ rmapp -p &quot;Application Name&quot;</span>
                </div>
              </CardContent>
            </Card>

            {/* Safe Deletion Demo */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Safe Deletion (Default)</CardTitle>
                <CardDescription className="text-slate-300">
                  Remove applications safely by moving them to trash. Perfect for when you want to be cautious.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-slate-600">
                  <img
                    src="/rmapp-site/images/trash-demo.png"
                    alt="Terminal demonstration of rmapp safe deletion moving files to trash"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 bg-black rounded p-4 font-mono text-sm">
                  <span className="text-green-400">$ rmapp &quot;Application Name&quot;</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkout on GitHub Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Check out the source code, contribute to the project, or report issues on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-[rgb(56,128,232)] hover:bg-[rgb(46,108,192)]" asChild>
                <a href="https://github.com/alewtschuk/rmapp" target="_blank" rel="noopener noreferrer" className="text-[#171717]">
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-[rgb(46,108,192)]" asChild>
                <a href="https://github.com/alewtschuk/rmapp/stargazers" target="_blank" rel="noopener noreferrer" className="text-[#171717]">
                  <Star className="h-5 w-5 mr-2" />
                  Star the Project
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(56,128,232)] mb-2">MIT License</div>
                <div className="text-slate-300">Open source and free to use</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(56,128,232)] mb-2">Active Development</div>
                <div className="text-slate-300">Regular updates and improvements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(56,128,232)] mb-2">OSS/ACC</div>
                <div className="text-slate-300">Contributions welcome</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-black/50">
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>MIT &copy; 2025 Alex Lewtschuk  |  Made with ❤️ for 👫 around the 🌎</p>
        </div>
      </footer>
    </div>
  )
}
