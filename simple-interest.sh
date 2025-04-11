#!/bin/bash
# simple-interest.sh

echo "Enter Principal:"
read principal
echo "Enter Rate of Interest:"
read rate
echo "Enter Time (in years):"
read time

# Calculate Simple Interest
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

echo "Simple Interest is: $interest"
