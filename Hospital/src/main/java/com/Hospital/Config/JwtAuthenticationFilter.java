package com.Hospital.Config;


import com.Hospital.Service.Impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;



    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


       final String requestTokenHeader = request.getHeader("Authorization");
        System.out.println(requestTokenHeader);

        String username=null;
        String jwtToken=null;

        if(requestTokenHeader !=null && requestTokenHeader.startsWith("Bearer ")) {

           jwtToken = requestTokenHeader.substring(7);
           try {
               username = this.jwtUtil.extractUsername(jwtToken);
           }catch (ExpiredJwtException e) {
               e.printStackTrace();
               System.out.println("jwt token get expired");
           } catch (Exception e) {
               e.printStackTrace();
               System.out.println("Error");
           }
        }else {
            System.out.println("Invalid Token");
        }

        // validate
        if(username != null && SecurityContextHolder.getContext().getAuthentication()==null) {
          final UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

          if(this.jwtUtil.validateToken(jwtToken,userDetails)) {
              //token is valid
              UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                      new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

              usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
              SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
          } else {
              System.out.println("token is not valid");
          }
        }
        filterChain.doFilter(request,response);
    }
}
