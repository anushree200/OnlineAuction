package main

import (
	"github.com/gin-gonic/gin"
	".\controller"
)


func Setuproutes(router *gin.Engine){
	auth:=router.Group("/auth")
	{
		auth.POST("/signup",controller.Signup)
		auth.POST("/login",controller.Login)
	}

	//we will add middleware
	router.GET("protected",func(c *gin.Context){
		c.JSON(200,gin.H{
			"data":"You are in protected route",
		})
	})
}