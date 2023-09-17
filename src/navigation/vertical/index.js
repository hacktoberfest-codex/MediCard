// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Profile'
    },
    {
      title: 'Medical Records',
      icon: CreditCardOutline,
      path: '/records'
    },
    {
      title: 'Find Doctor Near Me',
      icon: CreditCardOutline,
      path: '/doctor-nearme'
    },
    {
      title: 'Appointments',
      icon: Table,
      path: '/appointment'
    },
    {
      title: 'Help Center',
      icon: FormatLetterCase,
      path: '/help-center'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
