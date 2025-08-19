import { siteData, navigation } from '@/lib/data'

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'Analytics Dashboard'}</h1>
            <div className="flex space-x-6">
              <a key={index} href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Dashboard
              </a>
              <a key={index} href="/analytics" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Analytics
              </a>
              <a key={index} href="/users" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Users
              </a>
              <a key={index} href="/reports" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Reports
              </a>
              <a key={index} href="/settings" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Settings
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-8">
        <div className="card p-8 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Report Filters</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Generate and view analytical reports</p>
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.users?.map((user: any, index: number) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{user.name?.charAt(0) || 'U'}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'Analytics Dashboard'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}