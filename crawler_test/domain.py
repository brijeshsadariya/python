from urllib.parse import urlparse

# to get domain name(bp.com)
def get_domain_name(url):
    try:
        results = get_sub_domain_name(url).split('.')
        return results[-2] + '.' + results[-1]
    except:
        return ''



#to get subdomain name
def get_sub_domain_name(url):
    try:
        return urlparse(url).netloc
    except:
        return ''

