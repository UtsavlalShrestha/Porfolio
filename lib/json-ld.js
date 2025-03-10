export const getPersonJsonLd = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "url": "https://github.com/shresthautsav18",
    "affiliation": [
      {
        "@type": "Organization",
        "url": "https://www.globalimebank.com/",
        "name": "Global IME Bank"
      }
    ],
    "description": "Utsav Shrestha is an aspiring Data Engineer with experience in SQL, Python, ETL pipelines, and data visualization. He has worked with multiple organizations in data analytics and engineering roles.",
    "image": "https://your-profile-image-url.com", 
    "name": "Utsav Shrestha",
    "givenName": "Utsav",
    "familyName": "Shrestha",
    "gender": "Male",
    "birthPlace": "Kathmandu, Nepal",
    "jobTitle": "Data Engineer",
    "sameAs": [
      "https://www.linkedin.com/in/shresthautsav18",
      "https://github.com/shresthautsav18"
    ],
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Data Engineering"
      },
      {
        "@type": "Thing",
        "name": "SQL Optimization"
      },
      {
        "@type": "Thing",
        "name": "ETL Pipelines"
      },
      {
        "@type": "Thing",
        "name": "Data Warehousing"
      },
      {
        "@type": "Thing",
        "name": "Machine Learning"
      }
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English"
      },
      {
        "@type": "Language",
        "name": "Nepali"
      }
    ],
    "nationality": [
      {
        "@type": "Country",
        "name": "Nepal"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "New Summit College",
        "url": "https://www.newsummit.edu.np/",
        "startDate": "2021",
        "endDate": "2025",
        "major": [
          {
            "@type": "DefinedTerm",
            "name": "Computer Science & Information Technology"
          }
        ]
      },
      {
        "@type": "EducationalOrganization",
        "name": "Trinity International College",
        "url": "https://www.trinity.edu.np/",
        "startDate": "2018",
        "endDate": "2020",
        "major": [
          {
            "@type": "DefinedTerm",
            "name": "Physics"
          }
        ]
      }
    ],
    "workExperience": [
      {
        "@type": "OrganizationRole",
        "roleName": "Data Analytics/Engineer Intern",
        "startDate": "2024-11",
        "endDate": "2025-03",
        "worksFor": {
          "@type": "Organization",
          "name": "LIS Nepal",
          "url": "https://www.lisnepal.com/"
        }
      },
      {
        "@type": "OrganizationRole",
        "roleName": "Database Administrator Apprentice",
        "startDate": "2024-04",
        "endDate": "2024-07",
        "worksFor": {
          "@type": "Organization",
          "name": "CodeRush",
          "url": "https://www.coderush.com.np/"
        }
      },
      {
        "@type": "OrganizationRole",
        "roleName": "Business Data Analyst Intern",
        "startDate": "2024-09",
        "endDate": "2024-11",
        "worksFor": {
          "@type": "Organization",
          "name": "CloudTech Services",
          "url": "https://www.cloudtech.com/"
        }
      },
      {
        "@type": "OrganizationRole",
        "roleName": "Corporate Venture Capital & Business Analytics Extern",
        "startDate": "2024-03",
        "endDate": "2024-05",
        "worksFor": {
          "@type": "Organization",
          "name": "HP Tech Ventures",
          "url": "https://www.hptechventures.com/"
        }
      }
    ],
    "skills": [
      "SQL", "Python", "Bash", "Linux", "HTML", "CSS", "JavaScript",
      "Django", "NumPy", "Pandas", "Matplotlib", "Seaborn", "BeautifulSoup",
      "MySQL", "BigQuery", "Oracle", "MongoDB", "PostgreSQL",
      "Power BI", "Apache Airflow", "Snowflake", "GitHub", "Trello", "Jira", "Slack",
      "ETL/ELT Pipelines", "Data Warehousing"
    ],
    "certifications": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Associate Data Engineer in SQL",
        "provider": {
          "@type": "Organization",
          "name": "Datacamp",
          "url": "https://www.datacamp.com/"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Meta Data Analyst Professional Certificate",
        "provider": {
          "@type": "Organization",
          "name": "Coursera",
          "url": "https://www.coursera.org/"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Introduction to Apache Airflow",
        "provider": {
          "@type": "Organization",
          "name": "Datacamp",
          "url": "https://www.datacamp.com/"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Data Visualization in Power BI",
        "provider": {
          "@type": "Organization",
          "name": "Datacamp",
          "url": "https://www.datacamp.com/"
        }
      }
    ],
    "projects": [
      {
        "@type": "CreativeWork",
        "name": "Health Analytics - Exploratory Data Analysis on OCD Patients",
        "description": "Performed SQL-based exploratory data analysis on OCD patient data.",
        "programmingLanguage": ["SQL", "Python", "Power BI"]
      },
      {
        "@type": "CreativeWork",
        "name": "Spotify Airflow Automation",
        "description": "Developed Apache Airflow DAGs to automate data extraction of Spotify playlists and track user activity regularly.",
        "programmingLanguage": ["SQL", "Python", "Airflow", "Astro"]
      },
      {
        "@type": "CreativeWork",
        "name": "Disease Prediction & Doctor Recommendation with Booking System",
        "description": "Created a web application that predicts diseases and facilitates doctor appointments.",
        "programmingLanguage": ["PostgreSQL", "Python (Django)", "HTML", "CSS", "JavaScript"],
        "algorithm": ["Naïve Bayes", "Decision Tree", "Content Filtering"]
      },
      {
        "@type": "CreativeWork",
        "name": "Online Attendance System - Footendence",
        "description": "Developed a web application using machine learning for attendance tracking.",
        "programmingLanguage": ["HTML", "CSS", "Python", "Jupyter"]
      }
    ]
  };
};
