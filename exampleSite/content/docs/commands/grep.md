grep
====

```sh
# get all lower case letters
egrep '^[[:lower:]]+$' /usr/share/dict/words >/tmp/t.txt

# remove duplicate lines
grep -vxF -f /usr/share/dict/words /tmp/t2.txt >/tmp/t.txt
```
