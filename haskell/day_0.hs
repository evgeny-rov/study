module Lib
  ( someFunc,
  )
where

doubleEveryOther :: [Integer] -> [Integer]
doubleEveryOther [] = []
doubleEveryOther [x] = [x]
doubleEveryOther (x : y : xs) = x : (2 * y) : doubleEveryOther xs

toDigitsRev :: Integer -> [Integer]
toDigitsRev n
  | n < 0 = []
  | n < 10 = [n]
  | otherwise = mod n 10 : toDigitsRev (div n 10)

toDigits :: Integer -> [Integer]
toDigits n = reverse (toDigitsRev n)

sumDigits :: [Integer] -> Integer
sumDigits = foldr ((+) . sum . toDigits) 0

checkCreditCardNumber :: Integer -> Bool
checkCreditCardNumber n = mod (sumDigits (doubleEveryOther (toDigitsRev n))) 10 == 0

fizzBuzzOne :: (Integral a, Show a) => a -> [Char]
fizzBuzzOne n
  | mod n (3 * 5) == 0 = "FizzBuzz"
  | mod n 3 == 0 = "Fizz"
  | mod n 5 == 0 = "Buzz"
  | otherwise = show n

fizzBuzz :: [Integer] -> [String]
fizzBuzz = map fizzBuzzOne

reverseStr :: [Char] -> [Char]
reverseStr [] = []
reverseStr [x] = [x]
reverseStr xs = last xs : reverseStr (init xs)

type Peg = String
type Move = (Peg, Peg)

hanoi :: Integer -> Peg -> Peg -> Peg -> [Move]
hanoi 1 s d a = [(s, d)]
hanoi n s d a = hanoi (n - 1) s a d ++ [(s, d)] ++ hanoi (n - 1) a d s

anyExpr = hanoi 3 "A" "B" "C"

someFunc :: IO ()
someFunc = print anyExpr
