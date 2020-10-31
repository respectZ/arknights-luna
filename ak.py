from mitmproxy import ctx
import mitmproxy.http

class AKRedirect:

  def __init__(self):
    print('Addon for Redirecting Arknight [EN] Loaded !')

  def request(self, flow: mitmproxy.http.HTTPFlow):
    if 'gs.arknights.global' in flow.request.pretty_host:
      #ctx.log.info("pretty host is: %s" % flow.request.pretty_host)
      flow.request.host = "localhost"
      flow.request.scheme = 'http'

addons = [
  AKRedirect()
]