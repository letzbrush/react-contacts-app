import PageLayout from './PageLayout'
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

type LayoutType = typeof PageLayout & {
  Header: typeof PageHeader
  Content: typeof PageContent
  Footer: typeof PageFooter
}

const Layout = PageLayout as LayoutType
Layout.Header = PageHeader
Layout.Content = PageContent
Layout.Footer = PageFooter

export default Layout
