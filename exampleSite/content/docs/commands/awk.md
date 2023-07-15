awk
===

```sh
# upper case the first letter
awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1' file
```
