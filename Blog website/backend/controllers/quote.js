const express = require("express");
const quote = require("../models/quote");

exports.addQuote = (req ,res) => {
    let newQuote = quote({
        author: req.body.author,
        text: req.body.text,
    });
    newQuote.save(function(err,item){
        if(err){
            res.status(400).json({ 
                error : err,
                success: false, 
                msg: "Failed to save the quote" });
        }
        else{
           res.status(200).json({ 
            success: true, 
            msg: "Quote Successfully Added"
            });
        }
    });
};

exports.allQuote = (req ,res) => {
    quote.find({},function(err,quotesList){
        if(err){
            res.status(400).json({ 
                error : err,
                success: false, 
                msg: "Failed to save the quote" });
        }
        else{
           res.status(200).json({ 
            success: true, 
            quotesList : quotesList,
            msg: "Quote Fetch Successfully",

            });
        }
    });
};

exports.quoteData = (req,res) => {
    quote.findById(req.params.id,function(err,quoteFound){
        if(err){
            res.status(400).json({ 
                error : err,
                success: false, 
                msg: "Failed to save the quote" });
        }
        else{
           res.status(200).json({ 
            success: true, 
            quoteFound : quoteFound,
            msg: "Quote Fetch Successfully",

            });
        }
    });    
}