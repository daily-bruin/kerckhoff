from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
from pages.models import Page
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import math
import json

# Create your views here.

def index(request):
    return render(request, 'index.html')

@require_http_methods(["GET"])
def pages(request):
    #uses params to get pages
    pagesPerQuery = int(request.GET['pagesPerQuery'])
    queryNumber = int(request.GET['queryNumber'])
    paginator = Paginator(Page.objects.all(), pagesPerQuery, allow_empty_first_page=True)
    currentQuery = paginator.get_page(queryNumber)

    #adds each page's data to dict
    data = {}
    for page in currentQuery:
        eachPageData = {}
        eachPageData["title"] = page.title
        eachPageData["page-type"] = page.page_type
        eachPageData["public"] = page.is_public
        data[page.slug] = eachPageData;

    #converts data to JSON and returns
    return JsonResponse(data)

@require_http_methods(["POST"])
def create_page(request):
    return
