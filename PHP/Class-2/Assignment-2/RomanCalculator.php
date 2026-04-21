<?php
class RomanCalculator{
    private $romanNumbers = [
        1000 => 'M',
        900 => 'CM',
        500 => 'D',
        400 => 'CD',
        100 => 'C',
        90 => 'XC',
        50 => 'L',
        40 => 'XL',
        10 => 'X',
        9 => 'IX',
        5 => 'V',
        4 => 'IV',
        1 => 'I'    
    ];
    public function convertToRomanNumerals($number){
        if ($number <=0 || $number > 3999){
            return "Value is out of range. Please enter a number between 1 and 3999.";
        }

        $result = '';
        foreach ($this->romanNumbers as $value => $roman){
            while ($number >= $value){
                $result = $result . $roman;
                $number = $number - $value;
            }
        }
        return $result;

    }
}

