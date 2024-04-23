# Django SSO Implementation

# Overview
This project is a Django-based implementation of Single Sign-On (SSO) functionality. 
It allows users to authenticate once and access multiple applications within the same domain
without having to log in again.

# Installation

#### Clone the repository 
git clone https://github.com/Apoorv7777/Django-SSO-implementation.git

#### Navigate to the project directory
cd Django-SSO-implementation

#### Install dependencies
pip install -r requirements.txt

#### Run migrations
python manage.py migrate

#### Run the project
python manage.py runserver

## Docker
If you prefer to run the project using Docker, follow these steps:

1. Install Docker on your system if you haven't already.
   
2. Build the Docker image:
   
      #### docker build -t Django-SSO-implementation.
   
3. Run the Docker container:
   
      #### docker run -p 8000:8000 your-project
   
## Access your project in a web browser at http://localhost:8000.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

# Acknowledgements
This project was inspired by the need for a simple yet effective Single Sign-On solution for web applications.
Special thanks to the Django community for providing excellent documentation and resources.

# License
Include information about the license under which your project is distributed.

