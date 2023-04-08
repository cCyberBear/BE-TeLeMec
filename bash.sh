#!/bin/bash
i=1
sum=0

while read -r value; do
  sum=$((sum + value))
done < numbers.dat

average=$((sum / 5))

echo "The average is: $average"
