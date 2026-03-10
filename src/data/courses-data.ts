export interface CourseModule {
  title: string;
  items: string[];
  icon?: string;
}

export interface Course {
  slug: string;
  name: string;
  title: string;
  description: string;
  importance: string[];
  skills: string[];
  highlights: string[];
  tools: string[];
  whyThisCourse: string[];
  jobOpportunities: string[];
  modules: CourseModule[];
  duration: string;
  featured?: boolean;
  hot?: boolean;
}

export const coursesData: Course[] = [
  {
    slug: "data-analytics",
    name: "Data Analytics",
    title: "Data Analytics with Gen AI",
    description: "In today's world, companies generate and store massive amounts of data. Data Analysts, Business Analysts, and BI Experts play a crucial role in converting raw data into meaningful insights.",
    importance: [
      "In today's world, companies generate and store massive amounts of data.",
      "Data Analysts, Business Analysts, and BI Experts play a crucial role in converting raw data into meaningful insights.",
      "Insights are presented in the form of charts, dashboards, and summary reports, aiding management in business growth and decision-making."
    ],
    skills: ["SQL", "Excel", "Tableau", "Power BI", "Python", "Gen AI"],
    highlights: [
      "Gain proficiency in programming and analytical techniques essential for real-world applications.",
      "Learn industry-leading tools like SQL, Excel, Tableau, and Power BI."
    ],
    tools: ["SQL", "Excel", "Tableau", "Power BI", "Python", "Gen AI"],
    whyThisCourse: [
      "Comprehensive training on data visualization, reporting, and interpretation.",
      "Develop skills to help organizations optimize their performance and strategize effectively."
    ],
    jobOpportunities: [
      "Data Analyst",
      "Business Analyst",
      "Business Intelligence (BI) Expert"
    ],
    modules: [
      {
        title: "Module 1: Foundations of Data Analytics",
        items: [
          "Basics of Data Analytics",
          "Understanding data types and sources",
          "Overview of roles: Data Analyst, BI Expert"
        ]
      },
      {
        title: "Module 2: Microsoft Excel for Data Analytics",
        items: [
          "Advanced functions, formulas, and pivot tables",
          "Creating professional charts and visualizations",
          "Automation with Excel macros"
        ]
      },
      {
        title: "Module 3: SQL for Data Analytics",
        items: [
          "Basics of databases and SQL commands",
          "Mastering joins and subqueries",
          "Practical exercises with datasets"
        ]
      },
      {
        title: "Module 4: Data Visualization with Tableau",
        items: [
          "Interactive dashboards and stories",
          "Calculated fields and parameters",
          "Advanced data storytelling techniques"
        ]
      },
      {
        title: "Module 5: Power BI for Business Intelligence",
        items: [
          "Building dynamic reports",
          "Data modeling with DAX",
          "Integrating with multiple data sources"
        ]
      },
      {
        title: "Module 6: Business Analytics Concepts",
        items: [
          "Business metrics and KPIs",
          "Case studies on business growth with analytics",
          "Using insights to drive decisions"
        ]
      },
      {
        title: "Project & Outcomes",
        items: [
          "Real-world problem-solving with data",
          "Build end-to-end dashboards for a mock company"
        ]
      }
    ],
    duration: "90 Days",
    featured: false,
    hot: true
  },
  {
    slug: "major-incident-manager",
    name: "Major Incident Manager",
    title: "Major Incident Management Certification",
    description: "Master the art of handling high-pressure IT incidents. Learn to coordinate between technical teams and stakeholders to restore services swiftly.",
    importance: [
      "Critical role in minimizing business downtime and financial loss.",
      "Ensures professional handling of major service disruptions.",
      "Bridging the gap between technical resolution and business expectations."
    ],
    skills: ["ITIL", "ServiceNow", "Communication", "SLA"],
    highlights: ["Incident Response", "Crisis Management", "Stakeholder Communication", "ITIL Framework"],
    tools: ["ServiceNow", "Jira", "PagerDuty", "Microsoft Teams"],
    whyThisCourse: [
      "High-demand role in Enterprise IT and Managed Services.",
      "Develop leadership skills in high-stakes environments."
    ],
    jobOpportunities: ["Major Incident Manager", "Service Delivery Manager", "Incident Response Lead"],
    modules: [
      {
        title: "Module 1: ITIL 4 & Incident Management",
        items: [
          "Fundamentals of ITSM and ITIL 4",
          "Defining Incidents vs Major Incidents",
          "Service Level Agreements (SLAs) and Priority Matrix"
        ]
      },
      {
        title: "Module 2: Major Incident Lifecycle",
        items: [
          "Initial Assessment and Identification",
          "Command and Control Structure",
          "Establishing the Technical Bridge"
        ]
      },
      {
        title: "Module 3: Stakeholder Communication",
        items: [
          "Internal vs External Communication Plans",
          "Executive Briefing during Outages",
          "Managing Expectations under Pressure"
        ]
      },
      {
        title: "Module 4: Bridge Management",
        items: [
          "Facilitating Technical Swarming",
          "Conflict Resolution on the Bridge",
          "Documenting Actions and Timelines"
        ]
      },
      {
        title: "Module 5: Post-Incident Activity",
        items: [
          "Facilitating PIR (Post-Incident Review)",
          "Root Cause Analysis (RCA) Frameworks",
          "Continuous Service Improvement (CSI)"
        ]
      },
      {
        title: "Module 6: Tooling & Automation",
        items: [
          "Advanced ServiceNow MIM Module",
          "PagerDuty and On-call Scheduling",
          "Messaging Platforms Integration (Teams/Slack)"
        ]
      }
    ],
    duration: "90 Days",
    featured: true,
    hot: true
  },
  {
    slug: "data-science",
    name: "Data Science",
    title: "Data Science & Machine Learning Masterclass",
    description: "Dive deep into the world of Artificial Intelligence. From statistical modeling to deep learning, master the tools that power modern AI.",
    importance: [
      "Data is the new oil, and Data Scientists are the new refiners.",
      "Help businesses predict future trends and automate decision making."
    ],
    skills: ["Python", "ML", "Deep Learning", "Statistics"],
    highlights: ["Machine Learning", "Deep Learning", "Statistics", "Data Wrangling"],
    tools: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "Keras"],
    whyThisCourse: ["Most trending job of the decade.", "Opportunity to work on cutting-edge AI technology."],
    jobOpportunities: ["Data Scientist", "ML Engineer", "AI Researcher"],
    modules: [
      {
        title: "Module 1: Python for Data Science",
        items: [
          "Data Analysis with NumPy and Pandas",
          "Data Visualization with Matplotlib & Seaborn",
          "Efficient Data Wrangling pipelines"
        ]
      },
      {
        title: "Module 2: Statistics & Probability",
        items: [
          "Descriptive and Inferential Statistics",
          "Hypothesis Testing and A/B Testing",
          "Probability Distributions for ML"
        ]
      },
      {
        title: "Module 3: Supervised Learning",
        items: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines (SVM)"
        ]
      },
      {
        title: "Module 4: Unsupervised Learning",
        items: [
          "K-Means and Hierarchical Clustering",
          "Principal Component Analysis (PCA)",
          "Anomaly Detection Techniques"
        ]
      },
      {
        title: "Module 5: Deep Learning Foundations",
        items: [
          "Neural Networks Architecture",
          "TensorFlow and Keras Basics",
          "Introduction to CNNs for Image Recognition"
        ]
      },
      {
        title: "Module 6: Advanced Topics",
        items: [
          "Natural Language Processing (NLP)",
          "Time Series Forecasting",
          "Model Deployment with Flask/FastAPI"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "java-full-stack",
    name: "Java Full Stack",
    title: "Full Stack Java Developer Bootcamp",
    description: "Learn to build scalable enterprise applications from scratch. Master both frontend and backend with Java, Spring Boot, and React.",
    importance: ["Java remains the backbone of enterprise software globally.", "Full stack developers are highly versatile and in demand."],
    skills: ["Java", "Spring Boot", "React", "MySQL"],
    highlights: ["Backend Development", "Frontend Integration", "Database Design", "REST APIs"],
    tools: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
    whyThisCourse: ["Vast job market across all sectors.", "Stable and lucrative career path."],
    jobOpportunities: ["Full Stack Developer", "Backend Engineer", "Software Architect"],
    modules: [
      {
        title: "Module 1: Core Java Mastering",
        items: [
          "Object Oriented Programming (OOPs)",
          "Collections Framework & Generics",
          "Multi-threading & Exception Handling"
        ]
      },
      {
        title: "Module 2: Database Management",
        items: [
          "Relational Database Design with MySQL",
          "SQL Queries, Joins, and Indexing",
          "JDBC and Connection Pooling"
        ]
      },
      {
        title: "Module 3: Spring Framework & Boot",
        items: [
          "Dependency Injection & Inversion of Control",
          "Building RESTful APIs with Spring Boot",
          "Spring Data JPA and Hibernate"
        ]
      },
      {
        title: "Module 4: Frontend Development",
        items: [
          "Modern JavaScript (ES6+)",
          "React.js Components & State Management",
          "Integration with Backend APIs"
        ]
      },
      {
        title: "Module 5: Microservices & Cloud",
        items: [
          "Microservices Architecture Principles",
          "API Gateway and Eureka Discovery",
          "Spring Security and JWT"
        ]
      },
      {
        title: "Module 6: Testing & DevOps",
        items: [
          "Unit Testing with JUnit and Mockito",
          "Containerization with Docker",
          "CI/CD with Jenkins basics"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "aws-devops",
    name: "AWS DevOps",
    title: "AWS DevOps Engineer Certification",
    description: "Bridge the gap between development and operations. Learn to automate infrastructure and deployments on the world's leading cloud platform.",
    importance: ["Cloud adoption is mandatory for modern businesses.", "DevOps culture improves speed and reliability of software delivery."],
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    highlights: ["Infrastructure as Code", "CI/CD Pipelines", "Containerization", "Cloud Security"],
    tools: ["AWS", "Terraform", "Docker", "Jenkins", "Kubernetes"],
    whyThisCourse: ["Essential for modern software engineering.", "Highest paying roles in the industry."],
    jobOpportunities: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer"],
    modules: [
      {
        title: "Module 1: AWS Core Services",
        items: [
          "Compute (EC2, Lambda)",
          "Storage (S3, EFS)",
          "Networking (VPC, Route53)"
        ]
      },
      {
        title: "Module 2: Version Control & Build",
        items: [
          "Git Deep Dive and Branching Strategies",
          "AWS CodeCommit and CodeBuild",
          "Artifact Management"
        ]
      },
      {
        title: "Module 3: Continuous Integration/Deployment",
        items: [
          "Jenkins Pipeline as Code",
          "AWS CodeDeploy and CodePipeline",
          "Zero-downtime Deployment Strategies"
        ]
      },
      {
        title: "Module 4: Infrastructure as Code",
        items: [
          "Terraform Basics and State Management",
          "CloudFormation Templates",
          "Configuration Management with Ansible"
        ]
      },
      {
        title: "Module 5: Container Orchestration",
        items: [
          "Docker Containerization",
          "Amazon EKS (Kubernetes) Foundations",
          "ECS and Fargate"
        ]
      },
      {
        title: "Module 6: Monitoring & Security",
        items: [
          "AWS CloudWatch and X-Ray",
          "DevSecOps (IAM, KMS, WAF)",
          "Automated Compliance and Governance"
        ]
      }
    ],
    duration: "90 Days",
    hot: true
  },
  {
    slug: "azure-devops",
    name: "Azure DevOps",
    title: "Microsoft Azure DevOps Solutions",
    description: "Master the Microsoft ecosystem for software delivery. Learn to design and implement DevOps practices using Azure services and tools.",
    importance: ["Microsoft Azure is the fastest-growing cloud platform.", "Ideal for organizations already using Microsoft technologies."],
    skills: ["Azure", "Terraform", "Jenkins", "Git"],
    highlights: ["Build and Release Pipelines", "Azure Resource Management", "Monitoring & Logging"],
    tools: ["Azure DevOps", "ARM Templates", "Git", "Azure Pipelines"],
    whyThisCourse: ["Global recognition of Microsoft certifications.", "High demand in enterprise environments."],
    jobOpportunities: ["Azure DevOps Engineer", "Cloud Solution Architect"],
    modules: [
      {
        title: "Module 1: Azure Foundations",
        items: [
          "Azure Portal and CLI",
          "App Services and Functions",
          "Azure Storage and SQL"
        ]
      },
      {
        title: "Module 2: Azure DevOps Services",
        items: [
          "Azure Boards for Agile Planning",
          "Azure Repos (Git and TFVC)",
          "Azure Wiki and Documentation"
        ]
      },
      {
        title: "Module 3: Azure Pipelines (CI)",
        items: [
          "YAML Pipelines Deep Dive",
          "Classic Pipelines Comparison",
          "Self-hosted Agents vs Microsoft-hosted"
        ]
      },
      {
        title: "Module 4: Azure Release (CD)",
        items: [
          "Multi-stage Release Pipelines",
          "Deployment Gates and Approvals",
          "Deployment Slots and Traffic Routing"
        ]
      },
      {
        title: "Module 5: IaC & Provisioning",
        items: [
          "ARM Templates and Bicep",
          "Terraform on Azure",
          "Azure Automation and Desired State Configuration"
        ]
      },
      {
        title: "Module 6: Monitoring & Governance",
        items: [
          "Azure Monitor and Application Insights",
          "Log Analytics (KQL)",
          "Azure Policy and Cost Management"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "power-bi",
    name: "Power BI",
    title: "Mastering Microsoft Power BI",
    description: "Turn data into actionable insights with stunning visualizations and robust data modeling.",
    importance: ["Power BI is the leader in the BI platform market.", "Essential for data-driven business culture."],
    skills: ["DAX", "Data Modeling", "Dashboards", "SQL"],
    highlights: ["DAX Querying", "Data Modeling", "Dashboard Design", "Power Query"],
    tools: ["Power BI Desktop", "Power BI Service", "Excel", "SQL"],
    whyThisCourse: ["Quick transition from Excel to Analytics.", "User-friendly yet powerful toolset."],
    jobOpportunities: ["Power BI Developer", "Data Analyst", "BI Specialist"],
    modules: [
      {
        title: "Module 1: Power BI Introduction",
        items: [
          "Power BI Ecosystem (Desktop, Service, Mobile)",
          "Workflow from Data to Dashboard",
          "Installation and Basics"
        ]
      },
      {
        title: "Module 2: Data Transformation",
        items: [
          "Connecting to Multi-source Data",
          "Full Power Query Deep Dive",
          "Unpivoting, Merging, and Appending Data"
        ]
      },
      {
        title: "Module 3: Data Modeling",
        items: [
          "Star and Snowflake Schemas",
          "Managing Relationships and Cardinality",
          "Hierarchies and Data Categorization"
        ]
      },
      {
        title: "Module 4: DAX (Data Analysis Expressions)",
        items: [
          "Calculated Columns vs Measures",
          "Aggregations, Filter context, and Row context",
          "Time Intelligence Functions"
        ]
      },
      {
        title: "Module 5: Visualization & UX",
        items: [
          "Static vs Dynamic Visuals",
          "Drill-downs, Cross-filtering, and Tooltips",
          "Designing for mobile and web"
        ]
      },
      {
        title: "Module 6: Power BI Service",
        items: [
          "Workspaces, Apps, and Row-Level Security (RLS)",
          "Data Refresh Gateways",
          "Collaboration and Sharing Best Practices"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "business-analytics",
    name: "Business Analytics",
    title: "Business Analytics & Strategy",
    description: "Combine analytical thinking with business strategy to drive organizational growth and efficiency.",
    importance: ["Vital for strategic planning and optimization.", "Helps in understanding market trends and customer behavior."],
    skills: ["Excel", "SQL", "Tableau", "Statistics"],
    highlights: ["Statistical Analysis", "Predictive Modeling", "Business Intelligence", "Problem Solving"],
    tools: ["Excel", "Tableau", "SQL", "Python"],
    whyThisCourse: ["Versatile skills applicable to any industry.", "Career path to management and consulting."],
    jobOpportunities: ["Business Analyst", "Strategy Consultant", "Market Research Analyst"],
    modules: [
      {
        title: "Module 1: Analytics Foundations",
        items: [
          "The Role of a Business Analyst",
          "Data Analysis Lifecycle",
          "KPIs and Metric Definitions"
        ]
      },
      {
        title: "Module 2: Statistical Methods",
        items: [
          "Descriptive and Diagnostic Analytics",
          "Probability Concepts for Business",
          "Sampling and Distribution Fundamentals"
        ]
      },
      {
        title: "Module 3: SQL for Analysts",
        items: [
          "Writing Complex Business Logic in SQL",
          "Creating Analytical Views",
          "Data Extraction for Stakeholder Reporting"
        ]
      },
      {
        title: "Module 4: Visual Storytelling",
        items: [
          "Data Visualization Principles with Tableau",
          "Designing Executive Dashboards",
          "Communicating Insights to Non-technical Audiences"
        ]
      },
      {
        title: "Module 5: Predictive Analytics",
        items: [
          "Forecasting Sales and Demand",
          "Linear and Logistic Regression in Excel/Python",
          "Market Basket Analysis Basics"
        ]
      },
      {
        title: "Module 6: Business Strategy",
        items: [
          "SWOT Analysis and Market Research",
          "Applying Analytics to Marketing and Finance",
          "Final Case Study: Data-driven Business Growth"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "sap",
    name: "SAP",
    title: "SAP Enterprise Resource Planning (ERP)",
    description: "Learn to manage business operations and customer relations with the world's leading ERP software.",
    importance: ["SAP is used by 99% of top global companies.", "Critical for managing large-scale enterprise data."],
    skills: ["SAP FICO", "SAP MM", "SAP SD", "ABAP"],
    highlights: ["ERP Configuration", "Business Process Mapping", "Module Integration", "Technical Troubleshooting"],
    tools: ["SAP S/4HANA", "FICO", "MM", "SD", "ABAP"],
    whyThisCourse: ["Highly lucrative SAP ecosystem.", "Global opportunities in diverse sectors."],
    jobOpportunities: ["SAP Consultant", "ERP Specialist", "Systems Analyst"],
    modules: [
      {
        title: "Module 1: SAP Overview",
        items: [
          "Introduction to ERP and SAP S/4HANA",
          "SAP GUI and Fiori Launchpad",
          "Organizational Structure in SAP"
        ]
      },
      {
        title: "Module 2: SAP FICO (Finance)",
        items: [
          "General Ledger Accounting",
          "Accounts Payable and Receivable",
          "Asset Accounting and Cost Centers"
        ]
      },
      {
        title: "Module 3: SAP MM (Material Management)",
        items: [
          "Procure to Pay (P2P) Cycle",
          "Master Data (Material, Vendor)",
          "Inventory Management and Invoice Verification"
        ]
      },
      {
        title: "Module 4: SAP SD (Sales & Distribution)",
        items: [
          "Order to Cash (O2C) Cycle",
          "Pricing and Condition Records",
          "Delivery and Billing Processes"
        ]
      },
      {
        title: "Module 5: SAP S/4HANA Innovations",
        items: [
          "Simplifications in S/4HANA",
          "Real-time Analytics with SAP Embedded",
          "Universal Journal Concept"
        ]
      },
      {
        title: "Module 6: Implementation & ABAP Overview",
        items: [
          "SAP Implementation Methodology (ASAP/Activate)",
          "Functional Specifications Writing",
          "ABAP (Coding) Basics for Consultants"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    title: "Salesforce Administration & Development",
    description: "Master the world's #1 CRM platform. Learn to build and manage customer relationships effectively.",
    importance: ["The Salesforce economy is creating millions of jobs.", "Dominant platform for CRM and customer success."],
    skills: ["Admin", "Development", "Lightning", "Apex"],
    highlights: ["CRM Management", "Apex Programming", "Lightning Components", "Process Automation"],
    tools: ["Salesforce", "Trailhead", "Apex", "Visualforce"],
    whyThisCourse: ["Great for career switchers.", "Active and supportive community."],
    jobOpportunities: ["Salesforce Admin", "Salesforce Developer", "CRM Manager"],
    modules: [
      {
        title: "Module 1: Salesforce Fundamentals",
        items: [
          "CRM Concepts and Salesforce Architecture",
          "Standard Objects (Leads, Accs, Opps)",
          "Security and Data Access Model"
        ]
      },
      {
        title: "Module 2: Configuration & Admin",
        items: [
          "Custom Objects and Fields",
          "Record Types and Page Layouts",
          "Data Import and Export Wizard"
        ]
      },
      {
        title: "Module 3: Declarative Automation",
        items: [
          "Salesforce Flow Deep Dive",
          "Validation Rules and Approval Processes",
          "Email Templates and Quick Actions"
        ]
      },
      {
        title: "Module 4: Apex Programming",
        items: [
          "Apex Syntax and Collections",
          "SOQL and SOSL Queries",
          "DML Operations and Triggers"
        ]
      },
      {
        title: "Module 5: Lightning Web Components",
        items: [
          "Modern Frontend with LWC",
          "Wire Service and Event Handling",
          "Aura Component Overview"
        ]
      },
      {
        title: "Module 6: Testing & Deployment",
        items: [
          "Unit Testing in Apex",
          "Change Sets and Sandbox Management",
          "Salesforce DX and CI/CD basics"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "python-developer",
    name: "Python Developer",
    title: "Professional Python Development",
    description: "Master the most versatile programming language. Build web apps, automate tasks, and handle data with ease.",
    importance: ["Python is the fastest-growing programming language.", "Extensive library support for all domains."],
    skills: ["Python", "Django", "REST APIs", "PostgreSQL"],
    highlights: ["Scripting", "Web Development", "Database Integration", "Testing"],
    tools: ["Python", "Django", "Flask", "PostgreSQL", "Git"],
    whyThisCourse: ["Easy for beginners, powerful for pros.", "Vast application areas from web to AI."],
    jobOpportunities: ["Python Developer", "Software Engineer", "Backend Developer"],
    modules: [
      {
        title: "Module 1: Advanced Python",
        items: [
          "Functional vs OOP in Python",
          "Decorators, Generators, and Iterators",
          "Concurrrency: Threading vs Asyncio"
        ]
      },
      {
        title: "Module 2: Database and ORM",
        items: [
          "PostgreSQL Deep Dive",
          "SQLAlchemy and Django ORM",
          "Data Migration Strategies"
        ]
      },
      {
        title: "Module 3: Web with Django",
        items: [
          "MTV Architecture",
          "Forms, Views, and Templates",
          "Django Middleware and Signals"
        ]
      },
      {
        title: "Module 4: REST API Development",
        items: [
          "Django REST Framework (DRF)",
          "Serialization and Authentication",
          "API Documentation with Swagger"
        ]
      },
      {
        title: "Module 5: Task Queues & Workers",
        items: [
          "Asynchronous Tasks with Celery",
          "Message Brokers (Redis/RabbitMQ)",
          "Caching with Memcached/Redis"
        ]
      },
      {
        title: "Module 6: Deployment & Scaling",
        items: [
          "Dockerizing Python Apps",
          "Gunicorn and Nginx setup",
          "CI/CD with GitHub Actions"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "dot-net",
    name: "DOT NET",
    title: "Full Stack .NET Developer",
    description: "Learn the Microsoft .NET ecosystem to build modern, cloud-enabled, and internet-connected apps.",
    importance: ["Reliable framework for large-scale enterprise apps.", "Strong integration with Microsoft Azure cloud."],
    skills: [".NET Core", "C#", "Azure", "SQL Server"],
    highlights: ["C# Programming", ".NET Core", "Web API", "Entity Framework"],
    tools: [".NET", "SQL Server", "Visual Studio", "Azure"],
    whyThisCourse: ["Standard in the corporate IT world.", "Robust and high-performance framework."],
    jobOpportunities: [".NET Developer", "C# Engineer", "Solution Developer"],
    modules: [
      {
        title: "Module 1: C# Mastery",
        items: [
          "Advanced C# Features (LINQ, Async/Await)",
          "SOLID Principles and Design Patterns",
          "Unit Testing with xUnit/NUnit"
        ]
      },
      {
        title: "Module 2: ASP.NET Core MVC",
        items: [
          "Middlewares and Dependency Injection",
          "Routing, Filters, and Tag Helpers",
          "Securing Apps with ASP.NET Identity"
        ]
      },
      {
        title: "Module 3: Entity Framework Core",
        items: [
          "Code-First and Database-First Approaches",
          "Fluent API Configurations",
          "Optimizing Queries and Lazy Loading"
        ]
      },
      {
        title: "Module 4: Web API & REST",
        items: [
          "Building Scalable RESTful Services",
          "JWT Authentication and CORS",
          "API Versioning and Documentation"
        ]
      },
      {
        title: "Module 5: Frontend with Blazor/React",
        items: [
          "Component-based Architecture",
          "State Management in Frontend",
          "End-to-end Integration"
        ]
      },
      {
        title: "Module 6: Cloud & Microservices",
        items: [
          "Azure App Services and Functions",
          "Containerizing .NET Apps with Docker",
          "Event-driven Architecture with Service Bus"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "ui-ux-design",
    name: "UI UX Design",
    title: "User Experience & Interface Design",
    description: "Learn to create beautiful, user-centric interfaces. From research to prototyping, master the full design cycle.",
    importance: ["User experience is the key differentiator for products.", "Good design drives business success and brand loyalty."],
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    highlights: ["User Research", "Interaction Design", "Visual Design", "Prototyping"],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    whyThisCourse: ["Perfect blend of creativity and logic.", "Critical for all digital product companies."],
    jobOpportunities: ["UI Designer", "UX Designer", "Product Designer"],
    modules: [
      {
        title: "Module 1: Design Psychology",
        items: [
          "Human-Computer Interaction (HCI)",
          "Cognitive Load and Gestalt Principles",
          "Color Theory and Typography"
        ]
      },
      {
        title: "Module 2: User Research",
        items: [
          "Conducting User Interviews and Surveys",
          "Creating Personas and Empathy Maps",
          "Competitive Audit Analysis"
        ]
      },
      {
        title: "Module 3: Wireframing & IA",
        items: [
          "Information Architecture Mapping",
          "User Flows and Journey Mapping",
          "Low-fidelity Wireframing in Figma"
        ]
      },
      {
        title: "Module 4: Visual Design Systems",
        items: [
          "Creating Components and Styles",
          "Auto-layout and Responsive Grids",
          "Design System Documentation"
        ]
      },
      {
        title: "Module 5: Interaction Design",
        items: [
          "High-fidelity Prototyping",
          "Micro-interactions and Animations",
          "Usability Testing and Feedback"
        ]
      },
      {
        title: "Module 6: Career & Portfolio",
        items: [
          "Case Study Documentation",
          "Presenting Designs to Stakeholders",
          "Building a Professional Portfolio"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "management-information-systems",
    name: "Management Information Systems",
    title: "MIS and Business Intelligence",
    description: "Learn to manage and bridge the gap between business and technology through effective information systems.",
    importance: ["Critical for organizational efficiency and reporting.", "Helps in data-driven strategic planning."],
    skills: ["ERP", "BI Tools", "Database", "Analytics"],
    highlights: ["Information Management", "ERP Systems", "Database Management", "Business Reporting"],
    tools: ["Excel", "Tableau", "ERP Tools", "BI Tools"],
    whyThisCourse: ["Holistic view of business and IT.", "Prepares for leadership roles."],
    jobOpportunities: ["MIS Executive", "Information Architect", "Project Manager"],
    modules: [
      {
        title: "Module 1: IS Fundamentals",
        items: [
          "Information Systems in Business Strategy",
          "Ethical and Social Issues in IS",
          "IT Infrastructure Transformation"
        ]
      },
      {
        title: "Module 2: Data Management",
        items: [
          "Database Management Systems (DBMS)",
          "Big Data and Cloud Computing",
          "Master Data Governance"
        ]
      },
      {
        title: "Module 3: Enterprise Applications",
        items: [
          "ERP Systems (SAP/Oracle) Lifecycle",
          "CRM and Supply Chain Management",
          "E-commerce & Digital Collaboration"
        ]
      },
      {
        title: "Module 4: Business Intelligence",
        items: [
          "Decision Support Systems (DSS)",
          "Data Warehousing and ETL",
          "Predictive Analysis for Decision Making"
        ]
      },
      {
        title: "Module 5: Security & Control",
        items: [
          "Cybersecurity Frameworks",
          "Vulnerability Assessment & Audit",
          "Disaster Recovery & Continuity"
        ]
      },
      {
        title: "Module 6: Project Management",
        items: [
          "Managing IT Projects (Agile/Waterfall)",
          "Change Management in Organizations",
          "MIS Reporting and Dashboards"
        ]
      }
    ],
    duration: "90 Days"
  },
  {
    slug: "apse",
    name: "APSE",
    title: "Application Support Engineer",
    description: "Master the art of keeping enterprise applications running smoothly. Learn monitoring, troubleshooting, and support workflows.",
    importance: ["Ensures business continuity and user satisfaction.", "High demand for maintaining large software ecosystems."],
    skills: ["App Support", "ITIL", "Monitoring", "Troubleshooting"],
    highlights: ["L1/L2 Support", "Environment Monitoring", "Crisis Communication", "SLA Management"],
    tools: ["Splunk", "New Relic", "ServiceNow", "Linux"],
    whyThisCourse: ["Great entry point into IT career.", "Develop a deep understanding of live systems."],
    jobOpportunities: ["App Support Engineer", "Operations Analyst", "System Admin"],
    modules: [
      {
        title: "Module 1: Support Methodology",
        items: [
          "ITIL Service Operation Overview",
          "Incident vs Request Fulfillment",
          "Major Incident Support Role"
        ]
      },
      {
        title: "Module 2: Technical Troubleshooting",
        items: [
          "Linux/Unix Command Line for Support",
          "Analyzing Logs and Error Messages",
          "Networking Basics (Telnet, Ping, Traceroute)"
        ]
      },
      {
        title: "Module 3: Database for Support",
        items: [
          "Investigating Data Issues with SQL",
          "Database Locks and Performance Triage",
          "Data Modification Best Practices"
        ]
      },
      {
        title: "Module 4: Middleware & Monitoring",
        items: [
          "Application Server Basics (Tomcat/IIS)",
          "Infrastructure Monitoring (Splunk/Nagios)",
          "APM Tools (AppDynamics/Dynatrace)"
        ]
      },
      {
        title: "Module 5: Scripting & Automation",
        items: [
          "Bash Scripting for Task Automation",
          "Python for Support Tooling",
          "Automating Health Checks"
        ]
      },
      {
        title: "Module 6: Soft Skills & Process",
        items: [
          "Effective Triage and Estimation",
          "Client Communication and Empathy",
          "Managing On-call and Rotations"
        ]
      }
    ],
    duration: "90 Days"
  }
];
