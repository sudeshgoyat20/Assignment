interface NavAttributes {
    [propName: string]: any;
  }
  interface NavWrapper {
    attributes: NavAttributes;
    element: string;
  }
  interface NavBadge {
    text: string;
    variant: string;
  }
  interface NavLabel {
    class?: string;
    variant: string;
  }
  
  export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: NavBadge;
    title?: boolean;
    children?: NavData[];
    variant?: string;
    attributes?: NavAttributes;
    divider?: boolean;
    class?: string;
    label?: NavLabel;
    wrapper?: NavWrapper;
    id?:String
  }
  
  export const navItems: NavData[] = [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   id:"Dashboard"
    // },
    {
      title: true,
      name: ''
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      id:"dashboard",
     // icon: 'fa fa-users',
    },
    
    
 
    {
    divider: true
    },
  ];
  