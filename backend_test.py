#!/usr/bin/env python3
"""
Backend API Testing Script
Tests the basic health check endpoint for the portfolio website backend.
"""

import requests
import json
import os
from pathlib import Path

def load_frontend_env():
    """Load frontend environment variables to get the backend URL"""
    frontend_env_path = Path("/app/frontend/.env")
    env_vars = {}
    
    if frontend_env_path.exists():
        with open(frontend_env_path, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    env_vars[key] = value.strip('"')
    
    return env_vars

def test_health_check():
    """Test the basic health check endpoint at /api/"""
    print("=" * 60)
    print("TESTING BACKEND HEALTH CHECK ENDPOINT")
    print("=" * 60)
    
    # Get backend URL from frontend environment
    env_vars = load_frontend_env()
    backend_url = env_vars.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
    
    print(f"Backend URL: {backend_url}")
    
    # Test the health check endpoint
    endpoint = f"{backend_url}/api/"
    print(f"Testing endpoint: {endpoint}")
    
    try:
        response = requests.get(endpoint, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                response_json = response.json()
                print(f"Response JSON: {response_json}")
                
                # Check if response matches expected format
                expected_response = {"message": "Hello World"}
                if response_json == expected_response:
                    print("✅ SUCCESS: Health check endpoint working correctly")
                    print(f"   Expected: {expected_response}")
                    print(f"   Received: {response_json}")
                    return True
                else:
                    print("❌ FAILURE: Response doesn't match expected format")
                    print(f"   Expected: {expected_response}")
                    print(f"   Received: {response_json}")
                    return False
                    
            except json.JSONDecodeError as e:
                print(f"❌ FAILURE: Invalid JSON response - {e}")
                print(f"   Raw response: {response.text}")
                return False
        else:
            print(f"❌ FAILURE: HTTP {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.ConnectionError as e:
        print(f"❌ FAILURE: Connection error - {e}")
        return False
    except requests.exceptions.Timeout as e:
        print(f"❌ FAILURE: Request timeout - {e}")
        return False
    except Exception as e:
        print(f"❌ FAILURE: Unexpected error - {e}")
        return False

def main():
    """Main testing function"""
    print("Starting Backend API Tests...")
    print()
    
    # Test health check endpoint
    health_check_result = test_health_check()
    
    print()
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    if health_check_result:
        print("✅ Health Check Endpoint: PASSED")
        print("\nAll backend tests passed successfully!")
        return True
    else:
        print("❌ Health Check Endpoint: FAILED")
        print("\nBackend tests failed!")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)