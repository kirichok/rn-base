1. Need for Facebook.
    - Convert sha:1 to key:
        echo 'SHA-1 : XX XX XX' | xxd -r -p | openssl base64
        
2. Delete old tags from git:   
    # delete local tag '12345'
    git tag -d 12345
    # delete remote tag '12345' (eg, GitHub version too)
    git push origin :refs/tags/12345