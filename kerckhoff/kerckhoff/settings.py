"""
Django settings for kerckhoff project.

Generated by 'django-admin startproject' using Django 1.11.3.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os
import environ
import logging.config
from django.utils.log import DEFAULT_LOGGING

root = environ.Path(__file__) - 3 # three folder back (/a/b/c/ - 3 = /)
env = environ.Env(DEBUG=(bool, False),) # set default values and casting
environ.Env.read_env() # reading .env file

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

APP_NAME = "kerckhoff"
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

if not DEBUG:
    ALLOWED_HOSTS = [ env('SITE_HOST'), ]
else:
    ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]', env('SITE_HOST')]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'django_extensions',
    'webpack_loader',
    'corsheaders',

    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',

    'pages',
    'user_profile',
    'packages',
    'search',

    'cacheops'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'kerckhoff.middleware.RequestExceptionMiddleware',
]

ROOT_URLCONF = 'kerckhoff.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, "templates")
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Disable Django's logging setup
LOGGING_CONFIG = None

LOGLEVEL = os.environ.get('LOGLEVEL', 'info').upper()

logging.config.dictConfig({
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            # exact format is not important, this is the minimum information
            'format': '%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
        },
        'django.server': DEFAULT_LOGGING['formatters']['django.server'],
    },
    'handlers': {
        # console logs to stderr
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'default',
        },
        # Add Handler for Sentry for `warning` and above
        # 'sentry': {
        #     'level': 'WARNING',
        #     'class': 'raven.contrib.django.raven_compat.handlers.SentryHandler',
        # },
        'django.server': DEFAULT_LOGGING['handlers']['django.server'],
    },
    'loggers': {
        # default for all undefined Python modules
        '': {
            'level': 'WARNING',
            'handlers': ['console',],
        },
        # Our application code
        'kerckhoff': {
            'level': LOGLEVEL,
            'handlers': ['console',],
            # Avoid double logging because of root logger
            'propagate': False,
        },
        # # Prevent noisy modules from logging to Sentry
        # 'noisy_module': {
        #     'level': 'ERROR',
        #     'handlers': ['console',],
        #     'propagate': False,
        # },
        # Default runserver request logging
        'django.server': DEFAULT_LOGGING['loggers']['django.server'],
    },
})

WSGI_APPLICATION = 'kerckhoff.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': env.db()
}

# Authentication Backend

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

# AllAuth Settings
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_USERNAME_REQUIRED = True
SITE_ID = 1

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': [
            'profile',
            'email',
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file'
        ],
        'AUTH_PARAMS': {
            'access_type': 'offline',
            'hd': 'media.ucla.edu'
        }
    }
}

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'assets'),
)

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Webpack
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(os.path.dirname(BASE_DIR), 'webpack-stats.json'),
    }
}

# Elasticsearch
ES_HOST = env('ES_HOST', default="es")

# CORS

CORS_ORIGIN_ALLOW_ALL = True
CORS_URLS_REGEX = r'^/api/.*$'

# Cache Stuff

CACHEOPS_REDIS = env('CACHEOPS_REDIS_ADDRESS', default="redis://redis:6379/1")
CACHEOPS = {
    'packages.get': {'ops': 'all', 'timeout': 60*60}
}

# Other stuff

S3_SITE_UPLOAD_BUCKET = env('S3_SITE_UPLOAD_BUCKET')
S3_ASSETS_UPLOAD_BUCKET = env('S3_ASSETS_UPLOAD_BUCKET')
REPOSITORY_FOLDER_ID = env("REPOSITORY_FOLDER_ID")
LIVE_PUSH_SERVER = env('LIVE_PUSH_SERVER')

LOGIN_REDIRECT_URL = '/manage/'
