# Digital Ocean Droplet

In addition to building a local server from my old laptop I'm also playing around with a server on [Digital Ocean](https://m.do.co/c/8fdbe4af94f1).

## Steps

1. [Create a droplet on Digital Ocean](https://docs.digitalocean.com/droplets/tutorials/recommended-setup/)
2. [Install Node/NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
3. Create simple Node.js server ([example](https://gist.github.com/sitek94/df724d5040d349dee259e0eb0486e38e#file-server-js))
4. *(Optional)* If in the previous steps you followed Digital Ocean's tutorial and set up a firewall that allows only ssh, you will now have to create another firewall that will allow TCP traffic on the port of your choice.

## Resources

* [Full Node.js Deployment - NGINX, SSL With Lets Encrypt](https://www.youtube.com/watch?v=oykl1Ih9pMg)
* [NginX: About](http://nginx.org/en/)
* [YT: What is NginX and What are its use cases?](https://www.youtube.com/watch?v=WHv_t_yK-QM)
* [Getting certificate from Let's Encrypt](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx)\
  In case you get the following error: `The server experienced an internal error` \
  Try running `certbot --nginx -d yourdomain.com` instead of `certbot --nginx`
