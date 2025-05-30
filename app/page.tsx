import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  FileText,
  TrendingUp,
  MessageCircle,
  Calculator,
  Shield,
  Users,
  Zap,
  Clock,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo + Text in one flex container */}
          <div className="flex items-center space-x-5">
            <Image
              src="/logo.png?height=40&width=120"
              alt="Accelerate Indonesia Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-[#01304a]">Accelerate Indonesia</h1>
              <p className="text-sm text-gray-600">Solusi Akuntansi Handal</p>
            </div>
          </div>
          


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium">
              Beranda
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium"
            >
              Layanan
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium"
            >
              Testimoni
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium"
            >
              Kontak
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              className="bg-[#c2121f] hover:bg-[#a10e1a] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link href="#contact">Hubungi Kami</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-[#c2121f] transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default) */}
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="#"
              className="block text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium py-2"
            >
              Beranda
            </Link>
            <Link
              href="#services"
              className="block text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium py-2"
            >
              Layanan
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium py-2"
            >
              Tentang Kami
            </Link>
            <Link
              href="#testimonials"
              className="block text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium py-2"
            >
              Testimoni
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-[#c2121f] transition-colors duration-300 font-medium py-2"
            >
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#01304a] via-[#01304a] to-[#c2121f] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full">
            <Image
              src="/foto-1.jpeg?height=600&width=800"
              alt="Professional accounting team working"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#01304a]/80"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-8 h-8 text-[#c2121f]" />
              <span className="text-lg font-medium text-gray-200">Terpercaya sejak 2020</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Solusi Akuntansi Handal untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Pertumbuhan Bisnis Anda
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Kami menyediakan layanan akuntansi profesional yang membantu bisnis Anda tetap tertib secara finansial dan
              siap untuk berkembang.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c2121f] mb-1">150+</div>
                <div className="text-sm text-gray-300">Klien Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c2121f] mb-1">5+</div>
                <div className="text-sm text-gray-300">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c2121f] mb-1">99%</div>
                <div className="text-sm text-gray-300">Kepuasan Klien</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#c2121f] hover:bg-[#a10e1a] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                asChild
              >
                <Link href="#contact">Konsultasi Gratis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#c2121f] hover:bg-white hover:text-[#01304a] px-8 py-4 text-lg rounded-lg transition-all duration-300"
                asChild
              >
                <Link href="#services">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Dipercaya oleh berbagai jenis bisnis</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png?height=60&width=120"
                alt="Client logo"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png?height=60&width=120"
                alt="Client logo"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png?height=60&width=120"
                alt="Client logo"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
                        <div className="flex items-center justify-center">
              <Image
                src="/logo.png?height=60&width=120"
                alt="Client logo"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png?height=60&width=120"
                alt="Client logo"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01304a] mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan akuntansi dan keuangan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-5.jpeg?height=200&width=400"
                  alt="Bookkeeping services"
                  fill
                  className="object-cover object-[50%_40%] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#01304a]">Jasa Pembukuan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Kami mencatat transaksi keuangan secara sistematis dan rapi sesuai dengan standar akuntansi yang
                  berlaku di Indonesia (SAK).
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-3.jpeg?height=200&width=400"
                  alt="Financial reports"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#01304a]">Penyusunan Laporan Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Pembuatan laporan laba rugi, neraca, arus kas, dan laporan ekuitas yang siap untuk diaudit atau
                  dianalisis oleh manajemen.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-4.jpeg?height=200&width=400"
                  alt="Bank reconciliation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#01304a]">Rekonsiliasi Bank & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Membantu memastikan semua transaksi keuangan tercatat dan sesuai dengan data bank serta menjaga
                  stabilitas arus kas.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-2.jpeg?height=200&width=400"
                  alt="Financial consultation"
                  fill
                  className="object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#01304a]">Konsultasi Akuntansi & Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Diskusi dan bimbingan untuk memahami kondisi keuangan dan pengambilan keputusan strategis.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/foto-1.jpeg?height=200&width=400"
                  alt="Tax preparation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-full flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#01304a]">Persiapan Pajak & Pelaporan SPT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Mendukung kelancaran pelaporan pajak bulanan dan tahunan untuk badan usaha.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/foto-2.jpeg?height=500&width=600"
                alt="Professional accounting team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c2121f] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#01304a] mb-6">Tim Profesional yang Berpengalaman</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun di bidang akuntansi, tim kami terdiri dari akuntan bersertifikat
                dan profesional yang memahami kebutuhan bisnis Indonesia.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Akuntan bersertifikat dengan pengalaman industri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Menggunakan software akuntansi terbaru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Pelaporan real-time dan transparan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Keamanan data tingkat enterprise</span>
                </div>
              </div>

              <Button
                className="bg-[#c2121f] hover:bg-[#a10e1a] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <Link href="#contact">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01304a] mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan akuntansi bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Reason 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#c2121f] hover:border-l-[#01304a] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#01304a] mb-3 leading-tight">
                    Segregation of Duty yang Sehat
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Dengan menggunakan layanan kami, pencatatan keuangan dilakukan oleh tim profesional dan independen
                    di luar organisasi Anda. Ini membantu meminimalkan risiko kecurangan dan memastikan adanya pemisahan
                    yang jelas.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#c2121f] hover:border-l-[#01304a] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#01304a] mb-3 leading-tight">
                    Tim Profesional & Independen
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami terdiri dari tenaga akuntan yang berpengalaman dan terlatih, memastikan pencatatan dilakukan
                    sesuai standar dan tanpa konflik kepentingan.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#c2121f] hover:border-l-[#01304a] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#01304a] mb-3 leading-tight">
                    Otomasi Proses Administrasi
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami mendukung efisiensi kerja dengan sistem otomasi: monitoring tagihan, pengingat penagihan
                    otomatis via email, dan dashboard laporan keuangan yang mudah diakses.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#c2121f] hover:border-l-[#01304a] h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#01304a] mb-3 leading-tight">Efisiensi Biaya dan Waktu</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Dengan sistem yang terstruktur dan teknologi pendukung, Anda dapat mengurangi beban kerja internal
                    dan fokus pada pengembangan bisnis.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Reason 5 - Full width */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#c2121f] hover:border-l-[#01304a] md:col-span-2 h-full">
              <CardHeader className="flex flex-row items-start space-y-0 pb-4 min-h-[120px]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c2121f] to-[#01304a] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-[#01304a] mb-3 leading-tight">
                    Keamanan dan Kerahasiaan Data
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    Kami menjaga kerahasiaan informasi klien dengan ketat melalui prosedur keamanan data yang ketat dan
                    sistem yang terpercaya.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01304a] mb-4">Apa Kata Klien Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimoni dari berbagai klien yang telah merasakan manfaat layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#01304a]">Budi Santoso</h4>
                    <p className="text-sm text-gray-600">CEO, PT Maju Bersama</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Accelerate Indonesia membantu kami mengelola keuangan dengan sangat profesional. Laporan yang
                  disajikan sangat detail dan mudah dipahami."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#01304a]">Sari Dewi</h4>
                    <p className="text-sm text-gray-600">Owner, Toko Elektronik</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Sejak menggunakan jasa Accelerate Indonesia, kami tidak perlu khawatir lagi dengan masalah pembukuan
                  dan pajak. Semuanya ditangani dengan baik."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client testimonial"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#01304a]">Ahmad Rahman</h4>
                    <p className="text-sm text-gray-600">Direktur, CV Sukses Mandiri</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Tim yang sangat responsif dan professional. Mereka selalu memberikan saran yang tepat untuk
                  pengembangan bisnis kami."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 bg-gradient-to-br from-[#01304a] via-[#01304a] to-[#c2121f] text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#c2121f] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Siap membantu kebutuhan akuntansi bisnis Anda. Konsultasi gratis untuk langkah pertama!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Mari Berkolaborasi</h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  Tim profesional kami siap membantu mengoptimalkan keuangan bisnis Anda dengan solusi yang tepat
                  sasaran dan efisien.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-[#c2121f] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Alamat Kantor</h4>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        Jl. Jelambar Selatan I no 38, Jelambar Baru
                        <br />
                        Grogol Petamburan, Jakarta Barat 11460
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-[#c2121f] transition-colors duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <Link
                        href="mailto:accelerate.indo38@gmail.com"
                        className="text-gray-200 hover:text-white transition-colors duration-300 text-sm"
                      >
                        accelerate.indo38@gmail.com
                      </Link>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                      <Link
                        href="https://wa.me/6282112722049"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors duration-300 text-sm"
                      >
                        +62 821-1272-2049
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3">Jam Operasional</h4>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>09:00 - 18:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span>09:00 - 15:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu</span>
                      <span>Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA Cards */}
            <div className="space-y-6">
              {/* Primary CTA */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Dapatkan analisis awal kondisi keuangan bisnis Anda secara gratis dari tim ahli kami.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#01304a] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 w-full"
                    asChild
                  >
                    <Link href="https://wa.me/6282112722049" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Mulai Konsultasi
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              
              {/* Features List */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-4 text-center">Mengapa Memilih Kami?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Respons cepat dalam 24 jam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Tim akuntan bersertifikat</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Harga transparan tanpa biaya tersembunyi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Garansi kepuasan 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-[#c2121f] mb-2 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-sm text-gray-300">Klien Puas</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-[#c2121f] mb-2 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-sm text-gray-300">Tahun Pengalaman</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-[#c2121f] mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-[#c2121f] mb-2 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-sm text-gray-300">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01304a] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
  <Image
    src="/logo.png"
    alt="Logo Accelerate"
    width={40}
    height={40}
    className="object-contain"
  />
</div>
                <div>
                  <h3 className="text-2xl font-bold">Accelerate Indonesia</h3>
                  <p className="text-gray-300">Solusi Akuntansi Handal</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Kami menyediakan layanan akuntansi profesional yang membantu bisnis Anda tetap tertib secara finansial
                dan siap untuk berkembang dengan dukungan teknologi terdepan.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c2121f] transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c2121f] transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c2121f] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Layanan Kami</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c2121f] rounded-full mr-3"></span>
                    Jasa Pembukuan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c2121f] rounded-full mr-3"></span>
                    Laporan Keuangan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c2121f] rounded-full mr-3"></span>
                    Rekonsiliasi Bank
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c2121f] rounded-full mr-3"></span>
                    Konsultasi Keuangan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#c2121f] rounded-full mr-3"></span>
                    Persiapan Pajak
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Hubungi Kami</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#c2121f] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Jl. Jelambar Selatan I no 38, Jelambar Baru, Grogol Petamburan, Jakarta Barat 11460
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#c2121f] flex-shrink-0" />
                  <Link
                    href="mailto:accelerate.indo38@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    accelerate.indo38@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-[#c2121f] flex-shrink-0" />
                  <Link
                    href="https://wa.me/6282112722049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    +62 821-1272-2049
                  </Link>
                </div>
              </div>

              <Button
                className="bg-[#c2121f] hover:bg-[#a10e1a] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg mt-6 w-full"
                asChild
              >
                <Link href="https://wa.me/6282112722049" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex justify-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Accelerate Indonesia. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
